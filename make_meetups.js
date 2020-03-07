/* eslint-env node */
const getTimezoneOffset = require(`get-timezone-offset`);
const request = require(`request`);

const events = {
  'nodeschool': {
    reference_event_id: `266012076`,
    meetup_urlname: `nodeschool-vancouver`,
    timezone: `America/Vancouver`,
    heading: `💻 NodeSchool: %season% Is Here Series %emoji%`,
    startTime: 12,
    duration: 4 * 60 * 60 * 1000, // 4 hours in milliseconds
    dayOfWeek: 6, // saturday
    week: 2, // second week
    ignoreMonths: [],
    body: `Part of the %year% %season% Is Here Series %emoji%

Cool! 🙂 Read on...the usual spiel follows.

Are you a beginner at using Node.js and/or JavaScript? Are you wanting a refresher? Are you looking to level up your knowledge?

We don't have set classes, and as such it is considered a self study program. The NodeSchool organization has a lot of workshops for you to learn from, and we help out along the way, but that doesn't mean you have to do the workshops, we are a diverse group of people learning and growing together.

Bring your laptops and, if you can, have Node.js installed before you arrive. It's time for another session of learning!

We have regular mentors to help everyone learn. But we can't ever have too many people who want to help others learn, right?! We promise that by the end of the session you'll know enough to help the person sitting next to you learn too 💪

RSVP "yes" and come learn and/or help others learn Node.js and/or JavaScript over a casual Saturday afternoon!`,
  },
  // 'intro-to-open-source': { }
};

function getSeason(date) {
  // December through February is Winter 🔥,
  // March through May is Spring 🌻,
  // June through August is Summer 🌦
  // September through November is Fall 🍁.
  switch (date.getMonth()) {
    case 11: // December
    case 0: // january
    case 1: // feb
      return { season: `Winter`, emoji: `🔥` };
    case 2: // March
    case 3: // April
    case 4: // May
      return { season: `Spring`, emoji: `🌻` };
    case 5: // June
    case 6: // July
    case 7: // August
      return { season: `Summer`, emoji: `🌦` };
    case 8: // September
    case 9: // October
    case 10: // November
      return { season: `Fall`, emoji: `🍁` };
  }
  throw new Error(`somehow different`);
}

function findDayOfWeek(year, month, desiredWeek, desiredDayOfWeek) {
  let startingDate = new Date(year, month);
  while (startingDate.getDay() != desiredDayOfWeek) {
    startingDate.setDate(startingDate.getDate() + 1);
  }
  // should now be the first $day of the first week
  if (desiredWeek == 1) {
    return startingDate.getDate();
  }

  for (let i = 1; i < desiredWeek; i += 1) {
    startingDate.setDate(startingDate.getDate() + 7);
  }
  return startingDate.getDate();
}

function getEventForMonth(type, year, month) {
  if (events[type].ignoreMonths.includes(month)) {
    return null;
  }

  const day = findDayOfWeek(year, month, events[type].week, events[type].dayOfWeek);
  const offset = getTimezoneOffset(events[type].timezone, new Date(Date.UTC(year, month, day))) * 60000; // convert to milliseconds

  const eventStart = new Date(Date.UTC(year, month, day, events[type].startTime) + offset);
  const replacements = {
    month,
    year,
    day,
    ...getSeason(eventStart),
  };

  const replacer = function(str) {
    if (!str) { return str; }
    return str.trim().replace(/%(\w+)%/g, function(match, word) {
      return replacements[word];
    });
  };

  return {
    time: eventStart.getTime(),
    duration: events[type].duration,
    name: replacer(events[type].heading),
    description: replacer(events[type].body),
  };
}

const requestPromiseGet = (url) => {
  return new Promise(function(resolve, reject) {
    request.get(url, (error, response, body) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(JSON.parse(body));
    });
  });
};

async function popuplateMissingEvents(year, type) {
  const event = events[type];
  if (!event) { throw new Error(`unknown type: ${type}`); }

  const referenceEvent = await requestPromiseGet(`https://api.meetup.com/${event.meetup_urlname}/events/${event.reference_event_id}/?fields=description_images,featured_photo`);

  const yearlyEvents = await requestPromiseGet(`https://api.meetup.com/${event.meetup_urlname}/events?no_earlier_than=${year}-01-01T00:00:00.000&page=50&status=past,upcoming`).then(events => {
    return events.reduce(function(all, event) {
      all[new Date(event.time).getMonth()] = event;
      return all;
    }, {});
  });

  const eventsToCreate = [];
  for (let month = 0; month < 12; month += 1) {
    if (yearlyEvents[month]) {
      continue; // fixme multiple event types per month
    }
    const data = {
      featured_photo_id: referenceEvent.featured_photo.id,
      rsvp_limit: referenceEvent.rsvp_limit,
      ...getEventForMonth(type, year, month),
    };
    if (!data.time) {
      continue; // no event this month
    }
    eventsToCreate.push(data);
  }
  return eventsToCreate;
}

if (require.main === module) {
  popuplateMissingEvents(2020, `nodeschool`).then(console.log, console.error);
}

module.exports = {
  getSeason,
  findDayOfWeek,
  getEventForMonth,
};
