# CRUD API Server
[Task description](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md)
## Installation
`npm install`
## Start Server
### Start development server
`npm run start:dev`
### Start production server
`npm run start:prod`
### Start cluster server
`npm run start:multy`
## Testing
### Postman collection
Import collection [./postman/crud.postman_collection.json](./postman/crud.postman_collection.json) into Postman and run it.
### Run postman-based end-to-end tests
`npm run test:e2e`
It starts development server on random free port, waits for starting and run postman collection on it, then kills server. 
