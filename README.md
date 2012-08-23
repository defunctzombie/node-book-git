[![build status](https://secure.travis-ci.org/shtylman/node-book-git.png)](http://travis-ci.org/shtylman/node-book-git)
book-git is a git version middleware for the [book](https://github.com/shtylman/node-book) logging framework. It will add a commit field with the sha hash of your projects git repository.

## installation ##

```
npm install book-git
```

## use ##

book-git is used like all other book middleware. Just add it to your logger object. I recommend you create a file ```log.js``` for your project where you setup the logger however you desire across your entire project.

```javascript
// some logger you have created
var log = require('book').default();

// adds the git middleware to your logging stack
log.use(require('book-git')());

// log stuffs, git sha will be added automatically for you
log.info('hello world!');
```

The final log entry will have an additional field ```commit``` which will contain the sha hash. If you have a custom book transport, make sure it is writing it to whatever destination you desire. If you use other book transports like [book-email](https://github.com/shtylman/node-book-email) or [book-file](https://github.com/shtylman/node-book-file) then it will automatically be included in the stored entry.

