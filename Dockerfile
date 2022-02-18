FROM node:alpine3.10
COPY . /app
WORKDIR /app
CMD node server.js
