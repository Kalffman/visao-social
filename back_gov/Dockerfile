FROM node:lts

WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 3333

CMD [ "yarn", "dev" ]

# docker run -p 3333:3333 .