FROM node:15.14-0-alpine3.10
RUN apk add bash
WORKDIR /usr/src/path
CMD [ "tail", "-f", "/dev/null" ]