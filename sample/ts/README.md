# Ts with got plush guid

1. Install got-plus

```sh
$ npm i got-plus --save
```

2. Add a key to tsconfig.json
```json
{
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
}
```

3. Test Sampe

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