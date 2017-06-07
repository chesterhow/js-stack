# js-stack
A site listing the tools which will be used for the new React stack. View the live site [here](https://github.com/chesterhow/js-stack). Also serves as an experimental playground for messing around with React and friends.

## Usage
### Running locally
#### 1. Install dependencies
```sh
$ yarn
```

#### 2. Start local dev server
```sh
$ yarn start
```
Your site is now live at http://localhost:8080.

### Build
#### Development
```sh
$ yarn build:dev
```
You may configure the development build via `webpack.dev.config.js`.

#### Production
```sh
$ yarn build:prod
```
You may configure the production build via `webpack.prod.config.js`.

### Lint
```sh
$ yarn lint
```
This project uses ESLint and Airbnb's ESLint configurations. You may configure the linter via `.eslintrc`. This command also calls `flow` which starts up the Flow background process, which will check all Flow files for errors. To stop this process, run `flow stop`.

## Notes
### Code splitting
The production build has been configured to split the assets into separate files in the `dist` folder. The assets are named in the following convention: `[name].[chunkHash:8].[ext]`. E.g. `main.91b2f62c.js`.

The purpose of this is so we can leverage browser caching for certain assets which do not change on each build. Read on for an explanation.

#### `vendor` and `manifest` files
The `vendor` file should contain the "global" libraries used by the application. E.g. React, ReactDOM... The list can be configured in the `entry` block of `webpack.prod.config.js`.

These libraries do not change often. Thus, we want to be able to cache these assets on the browser. On each build, assuming no changes were made to these libraries, the `chunkHash` in `vendor.[chunkHash:8].js` remains the same. Hence, the browser will use it's cached copy instead of requesting a new copy from the server.

The `manifest` file is required to ensure the `chunkHash` for the `vendor` file remains the same each build. Full explanation [here](https://webpack.js.org/guides/code-splitting-libraries/#manifest-file).

#### `styles` file
Similarly, the hash in the `styles` file will remain the same on each build if no changes have been made to the CSS. Once more allowing us to leverage the browser's cache.

One known issue is that even though the styles are separated from the code, changes in the style still causes the `main` file's chunkHash to change. See [issue](https://github.com/webpack/webpack/issues/672).

### Nginx caching configuration
Here's the nginx configuration for implementing browser caching. Source: DigitalOcean's [guide](https://www.digitalocean.com/community/tutorials/how-to-implement-browser-caching-with-nginx-s-header-module-on-centos-7).

```nginx
. . .
# Expires map
map $sent_http_content_type $expires {
    default                    off;
    text/html                  epoch;
    text/css                   max;
    application/javascript     max;
    ~image/                    max;
}

server {
    listen 80;
    listen [::]:80;

    expires $expires;
. . .
```

### Flow
Flow can be configured via the `.flowconfig` file. To enable Flow, you'll have to add the comment `// @flow` to each file. For consistency's sake, I've placed the comment at the start of each file.

#### Comparison
The containers `Dev.js` and `Test.js` (in `/src/containers/`), are basically identical. The difference being `Dev.js` uses Flow and `Test.js` doesn't. Take a look at these 2 files for a simple comparison of how the code will look with and without Flow.

#### Dealing with non-JS imports
While webpack allows us to require CSS / SCSS files, Flow doesn't recognise it and will throw the error `Required module not found`. The solution was adding the following line into the `.flowconfig` file.

```
module.name_mapper.extension='scss' -> 'empty/object'
```

This can also be used for images if the need arises. Source and explanation [here](https://gist.github.com/lambdahands/d19e0da96285b749f0ef).

#### webpack & Hot Module Replacement
These are 3rd-party code which Flow does not have information about. In order to handle this, we can create a "library definition" or "libdef". More on libdefs [here](https://flow.org/en/docs/libdefs/). In `index.js` (in `/src/`), we are accessing `module.hot.accept` which Flow does not know about and hence will throw some errors.

The solution was to create our own libdef (see `/flow-typed/myLibDef.js`) and declare it there. Taken from [here](https://github.com/flowtype/flow-typed/issues/165).

```js
declare var module: {
  hot: {
    accept(path: string, callback: () => void): void;
  };
}
```

### Server-side Rendering
I've somehow managed to hack together something that worked!

#### Usage
1. Make sure you're on the `server-side` branch
2. Run `yarn ssr:build`
3. Then run `yarn ssr:start`

This is the 'production' build. I'm still figuring out how to create a dev build, preferably with hot reloading. Goodluck me.
