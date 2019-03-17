FROM docker:stable-dind
RUN mkdir -p /root/.kube
ADD config /root/.kube/config
RUN apk add --no-cache -X http://dl-cdn.alpinelinux.org/alpine/edge/testing kubernetes
RUN apk add --no-cache nodejs-npm docker
ADD server/package.json /app/server/package.json
WORKDIR /app/server
RUN npm install
ADD server /app/server
RUN npm run build
ADD client /app/client
WORKDIR /app/client
RUN npm install
RUN npm run build
RUN mv dist /app/server/dist/web
WORKDIR /app/server/dist
RUN mv /app/server/images /app/server/dist/images
CMD dockerd-entrypoint.sh & node index.js
