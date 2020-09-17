FROM node:latest as builder

WORKDIR /client

COPY ./client .

RUN npm install
RUN npm run build

FROM golang:latest

WORKDIR /client

COPY --from=builder ./client/build .

WORKDIR /go/src/gofolio/server

COPY ./server .

USER root

RUN go get -d -v ./...
RUN go install -v ./...

USER 1001

EXPOSE 8080

CMD [ "server"]
