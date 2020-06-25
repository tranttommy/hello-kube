FROM node:12-alpine

WORKDIR /hello-kube

COPY ./package*.json ./

RUN npm i

EXPOSE 2309

COPY src src

CMD npm start
