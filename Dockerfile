FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/templates/default.conf.template
EXPOSE 8080
ENV PORT=8080
CMD ["nginx", "-g", "daemon off;"]
