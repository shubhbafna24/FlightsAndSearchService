# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following enviorment variable
    -`PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json    

``````````````````````
{
  "development": {
    "username": "<Your_DB_Login_Name>",
    "password": "<Your_DB_Password>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}  

````````````````````````