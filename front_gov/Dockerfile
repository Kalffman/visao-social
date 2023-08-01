# Estágio de compilação
FROM node:lts AS building

WORKDIR /usr/src/app

RUN npm i -g yarn

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build


# Estágio de aplicação
FROM node:lts

RUN npm i -g http-server

ARG VITE_URL_HOST_API http://localhost:3333

WORKDIR /usr/src/web

COPY --from=building /usr/src/app ./

EXPOSE 8080

CMD [ "http-server", "-p", "8080", "./dist/" ]