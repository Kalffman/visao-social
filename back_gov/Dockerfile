FROM node:lts

WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 3333

ENV DATABASE_URL 'postgres://postgres:vef3Aez0aiY8xah@10.177.150.151:5432/PRODUCAO_cestafamilia'
ENV PORT 3333
ENV SECRET_KEY 'sdakljfngasdkgjndalkfjgndfg'

CMD [ "yarn", "dev" ]

# docker run -p 3333:3333 .