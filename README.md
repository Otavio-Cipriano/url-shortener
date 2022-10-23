# URL Shortner

A API to shorten urls, created using Nodejs, Typescript and MongoDB

## Index
- [Project](#project)
- [Routes](#routes)

## Project

This Application is URL Shortner, created using Nodejs, Typescript, MongoDB and Mongoose.

## Routes

### /
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
      

## /:id

Method Allowed by the Endpoint

| Syntax | Description |
| ----------- | ----------- |
| GET | Redirect to site from original url, if id exist and isValid |

GET method 

* Response 200 (redirect) 
* Response 301 (text/html)
