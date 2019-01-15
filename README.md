# 🌊 Surfboard

![Package version](https://img.shields.io/npm/v/@surfboard/core.svg?style=flat&logo=npm)
![License](https://img.shields.io/github/license/adaedra/surfboard-core.svg)
![Build status](https://img.shields.io/circleci/project/github/adaedra/surfboard-core/master.svg?style=flat&logo=circleci)

Surfboard is a modular dashboard project, based on modern web development tools (JavaScript, React,
Rx).
The aim is to create a tool that adapts to the need of its users and not the other way around, by
providing just the needed functional bricks to build your dashboard but leave all flexibility to
the user.

## `@surfboard/core`

This component is the core server, responsible for gathering data needed by dashboards and
dispatching them to the connected clients. You configure it by giving data sources (in the form of
RxJS observables) and it provides a websocket aggregating and dispatching all data as it is updated
by the sources.

## Warning

This project is still in initial development and is not completely ready yet for prime time. You
can toy with it, but be aware that big changes can arise at any moment while this project hasn't
reached the 1.0 release. Also, documentation and inter-packages dependencies may be a bit wonky
during this time.

## How to

You can see the [surfboard-example](https://github.com/adaedra/surfboard-example) repository for
an example of a surfboard dashboard.

First, add surfboard to your project:

```
npm i --save @surfboard/core
```

Then, create a `surfboard.server.js` file configuring your sources:

```js
const { interval } = require('rxjs')

const sources = {
    tick: interval(1000)
    // ...
}

module.exports = { sources }
```

And simply run the server to have a socket to listen to with the `surfboard` command. It will
create a server on port 1337 on which you can connect a websocket client.
