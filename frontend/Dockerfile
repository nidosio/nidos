FROM node:12.13.0-alpine as build

WORKDIR /usr/src/interfaces

COPY /interfaces ./

WORKDIR /usr/src/app

COPY /frontend/package.json ./
COPY /frontend/yarn.lock ./

COPY /frontend ./

RUN yarn

RUN yarn build

CMD ["yarn", "start"]
