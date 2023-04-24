FROM node:16-alpine AS base

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

FROM base AS local
ENV NODE_ENV=development
CMD [ "yarn", "start:dev" ]