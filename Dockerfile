FROM node:18-alpine
WORKDIR /learning_express
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
CMD yarn start