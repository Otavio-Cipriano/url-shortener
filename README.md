<h1 align="center">URL Shortner</h1>

<p align="center">A API to shorten urls, created using Nodejs, Typescript and MongoDB</p>

## Table of Contents

- [Features](#features)
- [Routes](#routes)
- [How to Install and Run](#how-to-install-and-run)
- [Author](#author)


## Features

- [x] You can send a url and receive a short verison
- [x] You can be redirect to the original url site if original url exists


## Built with

- [Nodejs](https://nodejs.org/en/download/)
- [ExpressJs](https://expressjs.com/pt-br/)
- [Ejs](http://ejs.co/)
- [ValidateJs](https://validatejs.org/)
- [MongoDB](https://validatejs.org/)
- [Mongoose](https://mongoosejs.com/docs/guide.html)
- [Typescript](https://www.typescriptlang.org/)

## Routes

### /

---

Method Allowed by the Endpoint

| Syntax | Description |
| ----------- | ----------- |
| GET | Return a Page with a Form to insert a URL and get a short version |
| POST | Receive a URL and return a short version |

GET method 

* Response 200 (text/html) 

POST method

* Response 200 (application/json)

      {
        "originalUrl": string,
        "shortUrl": string,
        "created_at": '2022-10-13T07:12:41.520Z'
      }
      

### /:id

---

Method Allowed by the Endpoint

| Syntax | Description |
| ----------- | ----------- |
| GET | Redirect to site from original url, if id exist and isValid |

GET method 

* Response 200 (redirect) 
* Response 301 (text/html)


## How to Install and Run

This application uses [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) and [Nodejs](https://nodejs.org/en/download/), it's necessary to download and install to run the application. If you already has them installed you can proceed.

Installing Yarn
            
     npm install --global yarn

Installing the dependencies using yarn

     yarn install
           
Running the application using yarn

      yarn run
      
## Author

Made by [@Otavio-Cipriano](https://github.com/Otavio-Cipriano) 🤖

<br/>
<br/>

<a href="https://www.linkedin.com/in/otaviocipriano/">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin"/>
</a>
<a href="https://twitter.com/otaviodv">
<img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="twitter"/>
</a>
