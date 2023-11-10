#--- base stage ----------------------------------------------------------------
FROM node:20-alpine AS base

RUN apk add --no-cache tzdata bash

ENV APP_PATH="/opt/app"

WORKDIR $APP_PATH

#--- build application stage ---------------------------------------------------
FROM base AS build-application

COPY ./package*.json ./

RUN npm ci

COPY . .

RUN npm run build

#--- release stage -------------------------------------------------------------
FROM base AS release

COPY --chown=node:node --from=build-application $APP_PATH/node_modules ./node_modules
COPY --chown=node:node --from=build-application $APP_PATH/dist ./
COPY --chown=node:node package.json ./
COPY --chown=node:node tsconfig.json ./
COPY --chown=node:node docker-entrypoint.sh ./
RUN chmod +x ./docker-entrypoint.sh

USER node

ENV PATH="$PATH:$APP_PATH/node_modules/.bin"

ENTRYPOINT ["./docker-entrypoint.sh"]
