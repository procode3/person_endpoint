# User API

This API allows you to manage user data. It provides endpoints for creating, retrieving, updating, and deleting user records. The API is built using Express.js and Prisma for database interactions.

## Table of Contents
- [Base URL](#base-url)
- [Endpoints](#endpoints)
  - [Retrieve All Users](#retrieve-all-users)
  - [Create a New User](#create-a-new-user)
  - [Retrieve a User by ID](#retrieve-a-user-by-id)
  - [Update a User by ID](#update-a-user-by-id)
  - [Delete a User by ID](#delete-a-user-by-id)
- [Error Handling](#error-handling)
- [Running the Server](#running-the-server)

## Base URL

The base URL for this API is `http://localhost:3000`.

## Endpoints

### Retrieve All Users

- **URL:** `/api`
- **Method:** GET
- **Description:** Retrieve a list of all users.
- **Response:**
  - **Status Code:** 200 OK
  - **Response Body:** An array of user objects.
  
  Example Response:
  ```json
  {
    "users": [
      {
        "id": 1,
        "name": "John Doe"
      },
      {
        "id": 2,
        "name": "Jane Smith"
      }
    ]
  }

