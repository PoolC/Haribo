FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn codegen
RUN yarn build

VOLUME ["/app/build"]

