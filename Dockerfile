FROM node:16.7.0-alpine
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]