FROM node:10
LABEL maintainer="Innowise-group"
COPY . /
RUN npm install
EXPOSE 4000
EXPOSE 3001
CMD npm run migrate ; npm start
