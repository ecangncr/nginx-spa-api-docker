FROM nginx:1.23.2-alpine 
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./html /usr/share/nginx/html
EXPOSE 80

CMD nginx -g 'daemon off;'