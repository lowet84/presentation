FROM alpine as build
RUN apk add --no-cache nodejs-npm
RUN mkdir /app
WORKDIR /app
ADD package.json .
ADD package-lock.json .

RUN npm install

ADD server.ts .
ADD client client/

RUN npm run build

FROM node:10-alpine
COPY --from=build /app/dist /app
WORKDIR /app
CMD node server.js
