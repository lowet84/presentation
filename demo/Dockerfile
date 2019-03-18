FROM alpine as builder
RUN apk add --no-cache nodejs-npm
RUN mkdir /app
ADD package* /app/
WORKDIR /app
RUN npm install
ADD index.js /app/index.js
RUN npm run build

FROM alpine
RUN apk add --no-cache nodejs
COPY --from=builder /app/prod.js /prod.js
CMD node prod.js
