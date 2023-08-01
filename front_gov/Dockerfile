FROM node:lts as build

WORKDIR /usr/src/build

COPY . .

RUN yarn install && yarn build

FROM node:lts

RUN npm i --global http-server

WORKDIR /usr/src/web

COPY --from=build /usr/src/build/dist .

EXPOSE 8080

CMD [ "http-server", "-p", "8080", "." ]