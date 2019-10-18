FROM jguyomard/hugo-builder:0.55 as builder

WORKDIR /root/temp

RUN apk update && \
    apk add --update git


RUN git clone https://github.com/BenjaminRochez/styleguider.git /opt/styleguider
RUN cd /opt/styleguider && hugo

FROM nginx:alpine as base

COPY --from=builder /opt/styleguider/public/. /usr/share/nginx/html

