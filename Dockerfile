FROM node:12.18.1
COPY . /app
WORKDIR /app
RUN npm install
CMD node server.js
