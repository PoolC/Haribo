FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY . .

RUN yarn codegen
RUN yarn build

# run으로 하면 정신못차림
CMD ["yarn", "serve"]

