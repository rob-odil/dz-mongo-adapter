# DozerJS Mongo Adapter

This is a simple MongoDB adapter that follows the conventions of the default
NeDB adapter. It has been developed to allow for mocking and development with
the NeDB adapter, then seamless transition to a Mongo adapter by utilizing the
same set of methods in both.

The adapter uses [node-mongoskin](https://github.com/kissjs/node-mongoskin) for
interaction with the database.

## Setup

You can install this adapter via the [dozerjs cli-tool](https://www.npmjs.org/package/dozerjs) by
running:

```
dozerjs install https://github.com/DozerJS/dz-mongo-adapter.git
```

After installing this adapter extension edit your `/config.js` file with the
following structure:

```javascript
  // Database store configuration
  db: {

    // Specify adapter to use
    adapter: 'mongo',

    // Adapter specific configuration
    config: {
      host: "mongodb://mongoserver.com/",
      database: "database_name",
      user: "username",
      pass: "password"
    }

  }
```

## Demo/Examples

While the `dozer.json` specifies only the installation of the adapter, the
scaffolding includes an example `api`, `model` and `controller` file.