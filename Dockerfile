FROM node:12.2.0-alpine
LABEL maintainer="Innowise-group"
COPY . /
RUN npm install
CMD npm run migrate ; npm run build; npm run start:prod;
