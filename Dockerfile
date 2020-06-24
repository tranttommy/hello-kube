FROM node:12

WORKDIR /hello-kube

COPY ./package*.json ./

RUN npm i

EXPOSE 2309

COPY src src

CMD npm start
