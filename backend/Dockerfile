FROM node:12.13-alpine as development

WORKDIR /usr/src/interfaces
COPY /interfaces ./

WORKDIR /usr/src/app

COPY /backend/package.json ./
COPY /backend/yarn.lock ./

RUN yarn

COPY /backend .

RUN yarn run build

FROM node:12.13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY /backend/package.json ./
COPY /backend/yarn.lock ./


RUN yarn install --production

COPY /backend .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
