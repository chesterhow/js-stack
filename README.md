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
This project uses ESLint and Airbnb's ESLint configurations. You may configure the linter via `.eslintrc`.

## Notes
### Code splitting
The production build has been configured to split the assets into separate files in the `dist` folder. The assets are named in the following convention: `[name].[chunkHash:8].[ext]`. E.g. `main.91b2f62c.js`.

The purpose of this is so we can leverage browser caching for certain static assets which are not changed at each build. Read on for an explanation.

#### `vendor` and `manifest` files
The `vendor` file should contains the "global" libraries used by the application. E.g. React, ReactDOM... The list is configurable in the `entry` block of `webpack.prod.config.js`.

Typically, these libraries do not change often hence, we want to be able to cache these assets on the browser. On each build, assuming no changes were made to these libraries, the `chunkHash` in `vendor.[chunkHash:8].js` remains the same. Hence, the browser will use it's cached copy instead of requesting a new copy from the server.

The `manifest` file is required to ensure the `chunkHash` for the `vendor` file remains the same each build. Full explanation [here](https://webpack.js.org/guides/code-splitting-libraries/#manifest-file).

#### `styles` file
Similarly, the hash in the `styles` file will remain the same on each build if no changes have been made to the CSS. Allowing us to leverage the browser's cache once more.

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
