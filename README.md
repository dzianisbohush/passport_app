# PASSPORT APP
#### Innowise-group test project

## Development

1. install PostgreSQL database
2. configure config/postgresConnection.json according to your values
    in /config/postgesConnection.json and 
    src/server/config/database-config.js
4. `npm install`
5 first syncronisation use code in src/server/models/index sync whith flag force set to true
    then  disable it.
6 `npm run migrate`
7. `npm start`
8. visit http://localhost:3000

If you don't have npm installed, visit https://nodejs.org/en/download/ and follow the instructions.
