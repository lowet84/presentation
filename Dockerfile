FROM docker:stable-dind
RUN mkdir -p /root/.kube
ADD config /root/.kube/config
RUN apk add --no-cache -X http://dl-cdn.alpinelinux.org/alpine/edge/testing kubernetes
RUN apk add --no-cache nodejs-npm docker curl
ADD server /app/server
ADD client /app/client
ADD package.json /app/package.json
WORKDIR /app/client
RUN npm install
WORKDIR /app/server
RUN npm install
WORKDIR /app
RUN npm install
RUN npm run build
WORKDIR /app/server/dist
CMD dockerd-entrypoint.sh & node index.js
