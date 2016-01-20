# koa2-boilerplate

A minimal boilerplate of [koa v2](https://github.com/koajs/koa/issues/533).


## Cli Command

### Setup

    npm install

### Develop

    npm start

### Test

    npm test

### Lint
    
    standard


## Dependencies

- Watcher and hot-reload: [nodemon](http://nodemon.io/)
- Test:
    + [mocha](https://mochajs.org/)
    + [should](https://github.com/tj/should.js/)
    + [supertest](https://github.com/visionmedia/supertest)
- Build: [babel](http://babeljs.io/)
    + tools: babel-cli, babel-register
    + presets: babel-preset-es2015, babel-preset-es2015-node5, babel-preset-stage-3
    + plugins: babel-runtime, babel-plugin-transform-runtime
- *Lint*: [standard](https://github.com/feross/standard)
    + add `babel-eslint` for ES6/ES7 support

## Reference

- https://github.com/koajs/koa/issues/533
- https://github.com/koajs/koa/issues/596


## License

MIT &copy; [GeekPlux](https://github.com/geekplux)
