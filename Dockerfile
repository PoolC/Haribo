FROM nginx:1.19.8

COPY ./build /var/www/poolc.org
COPY ./nginx.conf /etc/nginx/conf.d/poolc.org.conf

CMD ["nginx", "-g", "daemon off;"]
