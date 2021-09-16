FROM node:latest as node-builder

WORKDIR /client

COPY ./client .

RUN npm install
RUN npm run build

FROM golang:latest as go-builder

WORKDIR /go/src/gofolio/

COPY server.go .
COPY go.mod .

RUN go get -d -v .
RUN CGO_ENABLED=0 GOOS=linux go build -a -v -installsuffix cgo -o server .

FROM alpine:latest

WORKDIR /

COPY --from=node-builder ./client/build /client/build

COPY --from=go-builder /go/src/gofolio/server /

CMD [ "/server"]