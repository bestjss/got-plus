# Ts with got plush guid

1. Install babel env

```sh
$ npm install @babel/core @babel/register --save-dev
$ npm install --save-dev @babel/plugin-proposal-decorators
$ npm install --save-dev @babel/plugin-proposal-class-properties
```

2. Create a `.babelrc` file

```json
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "babel-plugin-parameter-decorator",
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-transform-runtime"
  ]
}

```

3. Install got-plus

```sh
$ npm i got-plus --save
```

4. Add `require('@babel/register');` to your start file , such as `index.js`

5. Test Sampe

```sh
# Start
$ npm start / node index.js

# Result
> 
{
  "title": "This is json test4 data",
  "name": "10",
  "id": "js",
  "header": {
    "user-agent": "got (https://github.com/sindresorhus/got)",
    "token": "token",
    "custom-header": "hello world",
    "accept-encoding": "gzip, deflate, br",
    "host": "localhost:3001",
    "connection": "close"
  },
  "req_query": {
    "page": "10"
  },
  "req_querystring": "page=10"
}

```