FROM golang
FROM node

ENV HOME=/app

WORKDIR /app

COPY . .

USER root

RUN cd client && npm install && npm run build

RUN npm install

USER 1001

EXPOSE 8080
CMD [ "go", "run"]
