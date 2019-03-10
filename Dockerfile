FROM alpine
RUN mkdir -p /root/.kube
ADD config /root/.kube/config
RUN apk add --no-cache -X http://dl-cdn.alpinelinux.org/alpine/edge/testing kubernetes
RUN apk add --no-cache nodejs-npm docker
