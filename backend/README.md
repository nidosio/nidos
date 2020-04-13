# Nidos

## Installation

```bash
$ yarn install
```

## Running the app

Start local database

```bash
docker-compose up -d
```

Insert following environment variables into `.env`

```env
DB_PORT=5432
DB_USERNAME=nidos
DB_PASSWORD=password
DB_DATABASE=nidos
DB_HOST=localhost
```


```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ npm test:e2e

# test coverage
$ npm test:cov
```
