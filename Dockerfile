FROM docker:stable-dind
RUN mkdir -p /root/.kube
ADD config /root/.kube/config
RUN apk add --no-cache -X http://dl-cdn.alpinelinux.org/alpine/edge/testing kubernetes
RUN apk add --no-cache nodejs-npm docker
ADD server /app/server
ADD client /app/client
ADD package.json /app/package.json
RUN npm install
RUN npm run build