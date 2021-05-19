FROM node:12-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 80
CMD ["npm", "run", "build:dev"]