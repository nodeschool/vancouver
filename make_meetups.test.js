/* eslint-env mocha */
/* eslint-disable jest/expect-expect */
const { getSeason, findDayOfWeek, getEventForMonth } = require(`./make_meetups.js`);

const assert = require(`assert`);

const dates = [
  {
    date: new Date(`April 13, 2019 16:00:00`),
    season: `Spring`,
  },
  {
    date: new Date(`May 11, 2019 16:00:00`),
    season: `Spring`, // actual meetup is wrong :)
  },
  {
    date: new Date(`June 8, 2019 16:00:00`),
    season: `Summer`,
  },
  {
    date: new Date(`July 13, 2019 16:00:00`),
    season: `Summer`,
  },
  {
    date: new Date(`August 10, 2019 16:00:00`),
    season: `Summer`,
  },
  {
    date: new Date(`Sept 14, 2019 16:00:00`),
    season: `Fall`,
  },
  {
    date: new Date(`Nov 9, 2019 16:00:00`),
    season: `Fall`,
  },
  {
    date: new Date(`Dec 14, 2019 16:00:00`),
    season: `Winter`,
  },
  {
    date: new Date(`Jan 11, 2020 16:00:00`),
    season: `Winter`,
  },
  {
    date: new Date(`Feb 8, 2020 16:00:00`),
    season: `Winter`,
  },
  {
    date: new Date(`Mar 14, 2020 16:00:00`),
    season: `Spring`,
  },
];

describe(`make_meetups`, function() {
  for (const date of dates) {
    it(`getSeason - ${date.date}`, function () {
      assert.deepEqual(getSeason(date.date).season, date.season);
    });
    it(`findDayOfWeek - ${date.date}`, function () {
      assert.deepEqual(findDayOfWeek(
        date.date.getYear() + 1900,
        date.date.getMonth(),
        2,
        6,
      ), date.date.getDate());
    });
  }
  it(`getEventForMonth`, function() {
    assert.deepEqual(
      getEventForMonth(`nodeschool`, 2020, 2 /* March */),
      {
        "body": `Part of the **2020 Spring** Is Here Series **🌻**\n\nCool! 🙂 Read on...the usual spiel follows.\n\nAre you a beginner at using Node.js and/or JavaScript? Are you wanting a refresher? Are you looking to level up your knowledge?\n\nWe don't have set classes, and as such it is considered a self study program. The NodeSchool organization has a lot of workshops for you to learn from, and we help out along the way, but that doesn't mean you have to do the workshops, we are a diverse group of people learning and growing together.\n\nBring your laptops and, if you can, have Node.js installed before you arrive. It's time for another session of learning!\n\nWe have regular mentors to help everyone learn. But we can't ever have too many people who want to help others learn, right?! We promise that by the end of the session you'll know enough to help the person sitting next to you learn too 💪\n\nRSVP "yes" and come learn and/or help others learn Node.js and/or JavaScript over a casual Saturday afternoon!`,
        "duration": 14400000,
        "eventStart": new Date(1584212400000), // taken from existing meetup id
        "title": `💻 NodeSchool: Spring Is Here Series 🌻`,
      },
    );
  });
});
