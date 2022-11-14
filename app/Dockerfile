FROM node:18.12.1
WORKDIR /usr/src/app
COPY . .
ARG SQL_HOST
RUN echo $SQL_HOST
RUN npm install --quiet