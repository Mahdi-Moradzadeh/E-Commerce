# E-Commerce

## Description
This is a back-end application for an e-commerce site. This application uses Express.js API and Sequelize to interact with a MySQL database.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Walkthrough](#walkthrough)
* [Questions](#questions)
* [License](#license)
* [Contributing](#contributing)

## Installation
To install necessary dependencies, run the following command:

```
npm install
```


You may also need to run the following command to create the database:

```
mysql -u root -p
```

Once you are in the MySQL shell, run the following commands:

```
source ./db/schema.sql;
```
then
```
quit;
```

then run the following command on your terminal:

```
node seeds/index.js
```

You will also need to create a .env file with the following information:

```
DB_NAME='ecommerce_db'
DB_USER='root'
DB_PW='your password'
```

## Usage
To use this application, run the following command:

```
npm start
```

## Walkthrough
[![Walkthrough Video](https://img.youtube.com/vi/3Q8Q1Z6q3ZM/0.jpg)](www.google.com)

## Questions
If you have any questions about the repo, open an issue or contact me directly at <a href="mailto:morad97mm@gmail.com">myEmail</a>. You can find more of my work at [MyGitHub](https://github.com/Mahdi-Moradzadeh).

[![GitHub followers](https://img.shields.io/github/followers/Mahdi-Moradzadeh.svg?style=social&label=Follow)](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2FMahdi-Moradzadeh)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-MyProfile-blue.svg)](https://www.linkedin.com/in/mahdimoradzadeh/)
[![Twitter Follow](https://img.shields.io/twitter/follow/7H3_3M.svg?style=social)](https://twitter.com/7H3_3M)

## License
This project is licensed under the MIT license.

## Contributing
This project was created by Mahdi Moradzadeh.
