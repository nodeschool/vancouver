# Node School Vancouver

This is our static site generator, powered by [gatsby](https://www.gatsbyjs.org)

## Attendies

Want a simple pull request? Add yourself to the data/attendies/ directory. Create a new yaml file with your name, with the following content:

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

This is heavily based off the nodeschool toronto template. It used jekyll which when I tried it wouldn't compile properly, and as a node group, figured all node was better.

## Install all depenendancies

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
    ├── attendies
    ├── photos
    ├── config.js
    ├── path-prefix.js

1.  **`/data/mentors`**: This contains a list of your mentors. One yaml file per mentor. Icons are taken from github

2.  **`/data/attendies`**: This contains a list of any attendies that want to show themselves as part of the community.

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
