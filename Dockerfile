FROM node:16.7.0
COPY . /app
WORKDIR /app
RUN npm install
CMD node server.js
