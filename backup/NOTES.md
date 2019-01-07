1. Fundamentals of Node.js

Node.js is a javascript runtime built on Chromes V8 Javascript engine. Node.js uses an event driven model that makes it lightweight and efficient. The Node.js package ecosystem "npm" is the largest ecosystem of open source libraries in the world.

Node.js is Javascript running on the backend of a server, which allows us to easily communicate with database and create CRUD apps.

Node.js uses Javascript to create fast applications such as chat and social media services

2. Project README

Node.js Overview
    -V8 engine
    -Modules
    https://nodejs.org/api/modules.html#modules_modules
        In the Node.js module system, each file is treated as a separate module. For example, consider a file named foo.js:
        const circle = require('./circle.js');
    -Event Emitter
     https://nodejs.org/api/events.html#events_events
        Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.
    -The file system
    https://nodejs.org/api/fs.html#fs_url_object_support
        The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions. To use this module: const fs = require('fs');
    -Routing
        somewebsite.com/someroute
        It’s basically taking the user (or some data) from one place to another. That place is the route.
    -Express
        Express.js, or simply Express, is a web application framework for Node.js
        It is designed for building web applications and APIs.[3] It has been called the de facto standard server framework for Node.js
        Express is the E in The MEAN stack (mongo, express, angular and Node) or MERN (Mongo, Express, React and Node)