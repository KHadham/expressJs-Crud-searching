# Simple REST
![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/License-KHsoft-yellowgreen.svg)


## Getting started
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- npm init parent foldernya,lalu install yang di perlukan seperti npm install express mysql body-parser dotenv
  



### Buat Environment Variable
```
$ touch .env
$ nano .env
```
### Buat file .env sendiri untuk konfigurasi DB
```
DB_HOST="Your_Host"
DB_USERNAME="Your_Username"
DB_PASSWORD="Your_Password"
DB_NAME="Your_Table"

SERVER_PORT=9999
```
### Lalu Start Development Server Dengan mengetik
```
$ npm start

npm start ini menjalanakan file yang di konfigurasikan di file package.json dapat di ubah seseuai kebutuhan
```
