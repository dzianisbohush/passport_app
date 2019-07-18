FROM node:12.2.0-alpine
LABEL maintainer="Innowise-group"
COPY . /
RUN npm install
EXPOSE 4000
EXPOSE 3001
CMD npm run migrate ; npm run build; npm run start:prod;
