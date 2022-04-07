### Introduction
REST api for a social media app using nodejs

### Features
* Register user
* Login user
* Create and delete posts
* Follow and unfollow other users

### Requirements
- [Nodejs](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Mongodb](https://www.mongodb.com/try/download/community) is a document-oriented NoSQL database used for high volume data storage. Instead of using tables and rows as in the traditional relational databases, MongoDB makes use of collections and documents. Documents consist of key-value pairs which are the basic unit of data in MongoDB. Collections contain sets of documents and function which is the equivalent of relational database tables. 
- [Postman](https://www.postman.com/downloads/) is an API client that makes it easy for developers to create, share, test and document APIs. This is done by allowing users to create and save simple and complex HTTP/s requests, as well as read their responses. The result - more efficient and less tedious work.

### Installation Guide
* Clone this repository [here](https://github.com/alahirajeffrey/social-media-REST-api.git).
* Run `npm install` to install all dependencies. Ensure you have node and npm installed.
* Ensure you have mongodb installed and running locally on your computer or you could use atlas
* Create an .env file in your project root folder and add your variables. Ensure you add your database connection string. See .env.sample for assistance.

### Usage
* Run `node index.js` to start the application.
* Connect to the API using Postman on port 8080.

### API Endpoints
| HTTP Verbs | Endpoints | Action | Required |
| --- | --- | --- | --- |
| POST | /api/url/shorten | To shorten a url | req.body.longUrl |
| GET | /api/url/getAll | To retrieve all urls | |
| GET | /api/url/getOne | redirect to long url using id | req.body.id |

### Author(s)
* [Alahira Jeffrey](https://github.com/alahirajeffrey)

### License
This project is available for use under the MIT License.
