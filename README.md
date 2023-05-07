# Tasked - An Express API for a Basic Task App

This is an Express API for a basic task app, where users can perform CRUD operations to manage their tasks.

## Getting Started

To get started with this project, you'll need to follow these steps:

1. Clone this repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Create a `.env` file in the root directory of the project and set the following variables:

```bash
MONGO_URI=<your-mongodb-connection-string> # the connection string to your MongoDB database
```
4. Start the server by running `npm start.`

## API Endpoints
This API provides the following endpoints: 

### GET /api/v1/tasks
Returns a list of all tasks in the database

### POST /api/v1/tasks
Creates a new task with the given data in the request body.

### GET /api/v1/tasks/:id
Returns a single task by its ID.

### PATCH /api/v1/tasks/:id
Updates the task with the given ID using the data in the request body.

### DELETE /api/v1/tasks/:id
Deletes the task with the given ID

## Error Handling
This API uses a centralized error handling middleware to handle errors. If an error occurs during the processing of a request, the middleware will return an appropriate HTTP status code along with an error message.
