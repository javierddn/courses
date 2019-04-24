FROM node:8-alpine
 

WORKDIR  /app

 

COPY ./ /app/

 

RUN npm install

 

EXPOSE 4200

 

ENTRYPOINT npm start