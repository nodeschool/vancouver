# Node School Vancouver

This is our static site generator, powered by [gatsby](https://www.gatsbyjs.org)

## Attendees

Want a simple pull request? Add yourself to the data/attendees/ directory. Create a new yaml file with your name, with the following content:

```
---
name: Name
github: <github id>
twitter: <optional twitter id>
```

When in doubt, look at other people in that directory

## Mentors

If you want to help teach or contribute in anyway, Add yourself to the data/mentors/ directory. Create a new yaml file with your name, with the following content:

```
---
name: Name
github: <github id>
twitter: <optional twitter id>
```

We usually like mentors to have come to a session before, and read up on the https://github.com/nodeschool/organizers/wiki/Event-Mentor-Best-Practices#on-being-a-mentor section on the nodeschool wiki.

# Template

This is heavily based off the NodeSchool Toronto template. It used Jekyll which when I tried it wouldn't compile properly, and as a Node.js group, figured all Node.js was better.

## Install all dependencies

```
npm install
```

## Local Development

```
npm run dev
```

This should start gatsby on port 3000

## Configuration

Everything for your nodeschool event should be managed in the data/ directory


    data
    ├── mentors
    ├── attendees
    ├── photos
    ├── config.js
    ├── path-prefix.js

1.  **`/data/mentors`**: This contains a list of your mentors. One yaml file per mentor. Icons are taken from github

2.  **`/data/attendees`**: This contains a list of any attendees that want to show themselves as part of the community.

3.  **`/data/photos`**: Your events photos. **Not yet implemented**

5.  **`config.js`**: Your main configuration file, all your chapter's specific information should go here

6.  **`path-prefix.js`** : Your specific url for your chapter. So "vancouver" for https://nodeschool.io/vancouver

## 💫 Deploy

```
npm run deploy:github
```

This will deploy your site to your gh-pages branch of the current repository


## Todo

[ ] Remove scss and replace it with in component emotion (Easier to track down styles)
[X] Photos (Maybe just order by filename)
  * Maybe an upgrade, date-name.md which has images: [./date-name.jpg] as frontmatter so we can do a lightbox with details/scroll through
  * https://github.com/gatsbyjs/gatsby/issues/7007
[ ] Switch from using float to css grid
[ ] Show more future and past events
[ ] Support gravatar for images instead of just github?


----

# Old README

# NodeSchool Vancouver 🇨🇦

NodeSchool is a series of open source [workshoppers](http://nodeschool.io/) that
teach web software skills.

NodeSchool meetups like NodeSchoolYVR provide a space for people to do the
workshoppers on their own or with others. The workshopper tutorials are used as
the course curriculum, while mentors are here to help attendees work through
challenges. Learn more [here](http://nodeschool.io/vancouver/).

## Join our meetups 💻

RSVP to our scheduled events on [meetup.com](https://www.meetup.com/nodeschool-vancouver).
Feel free to come 15 minutes early and help set up!

If you're a sponsor and want to host workshops for new and experienced devs,
check out the [scheduling](./SCHEDULING.md) doc.

Workshops from before Nov 2017 are archived [here](https://ti.to/nodeschool-vancouver).

## Talk with each other ⚡️

Every community needs a reliable way to communicate. To make it easier, we have
a few ways for everyone to speak with each other. Organizers can be reached through
all current channels.

### Current: 1 day max response time.

- [meetup discussion board](https://www.meetup.com/nodeschool-vancouver/discussions/): Public group discussion
- [twitter](https://twitter.com/nodeschoolyvr): tweet [@nodeschoolyvr](https://twitter.com/nodeschoolyvr) for general chat
- [github issues](https://github.com/nodeschool/vancouver/issues/): for planning

### Phased out

- ~- [slack](https://yvrdev.slack.com): for general chat, planning meetups, and
questions about workshops if you're challenging yourself at home. Go to YVRDev slack
(sign up [here](https://yvrdev.herokuapp.com/) if you don't have it) and join
the #nodeschool-yvr channel~
- ~- [NodeSchool](https://community.vancouvertech.com/c/events/nodeschool) at [YVR Tech Community](https://community.vancouvertech.com): for planning~
- ~~[meetup.com](https://www.meetup.com/nodeschool-vancouver): general info~~
- ~~[gitter](https://gitter.im/nodeschool/vancouver): general chat~~

## Want to mentor or help organize? 💛

If you are interested in mentoring, please make a
[Pull Request](https://github.com/nodeschool/vancouver/pulls) to add
yourself to this list. We also ask you to read over [Event Mentor Best Practices](https://github.com/nodeschool/organizers/wiki/Event-Mentor-Best-Practices)
on what it's like being a mentor prior to signing up!

### Current Mentors

- [@qard](https://github.com/qard)
- [@chowdhurian](https://github.com/chowdhurian)
- [@ayliao](https://github.com/ayliao)
- [@halkeye](https://github.com/halkeye)

### Past Mentors

- [@lvivier](https://github.com/lvivier)
- [@gyaresu](https://github.com/gyaresu)
- [@lrlna](https://github.com/lrlna)
- [@switters](https://github.com/switters)
- [@tabruhn](https://github.com/tabruhn)
- [@forivall](https://github.com/forivall)
- [@florida](https://github.com/florida)
- [@normful](https://github.com/normful)
- [@baldwynn](https://github.com/baldwynn)
- [@JimFung](https://github.com/JimFung)
- [@Scoutski](https://github.com/Scoutski)
- [@lyntco](https://github.com/lyntco)
- [@emclaren](https://github.com/emclaren)
- [@fishrock123](https://github.com/fishrock123)

If you've come to a few NodeSchool events, we encourage you to mentor! :tada:

## Code of Conduct

- [Code of Conduct for Nodeschool Vancouver](code-of-conduct.md)
- [No photography without an individual's permission](https://adainitiative.org/2013/07/another-way-to-attract-women-to-conferences-photography-policies/) 
