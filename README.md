# Spring Boot CRUD Project with RESTful Endpoints and AJAX Integration

## Overview
This Spring Boot project demonstrates a CRUD (Create, Read, Update, Delete) application with RESTful endpoints. The application integrates with AJAX (jQuery) requests for communication with the front end Bootstrap API. 
 
The CRUD operations are performed on a data entity (e.g., Employee, Product, etc.). The application provides endpoints to handle these operations, enabling seamless interaction with the data from the front end .

## Features 
- RESTful endpoints for CRUD operations.
- Integration with AJAX requests for asynchronous communication with the front end.
- Utilizes Spring Boot for easy setup and development.
- Implements basic error handling and validation.
- Supports Create, Read, Update, and Delete operations on a specific data entity.

## Technologies Used
- Spring Boot
- Spring Data JPA
- Hibernate
- Postgresql (or any preferred database)
- jQuery
- Bootstrap

## Setup Instructions
**Access the Application**:
- Open a web browser and go to `http://localhost:8081` (or the port specified in your `application.properties` file).
- You should see the front end interface for performing CRUD operations.

## API Endpoints

### Greet User

- URL: `/api/users/{name}`
- Description: Greets a user by name.

###List All Users

- URL: `/api/users/list`
- Description: Lists all registered users.

### Register User

- URL: `/api/users/register`
- Description: Registers a new user.

### Delete User

- URL: `/api/users/delete/{id}`
- Description: Deletes a user by ID.

### Search User by ID

- URL: `/api/users/searchById?id={id}`
- Description: Searches for a user by ID.

### Update User

- URL: `/api/users/update`
- Description: Updates user information.

### Search Users by Name

- URL: `/api/users/searchByName?name={name}`
- Description: Searches for users by name.


## Front End Interface
- The front end interface is built using Bootstrap for styling and jQuery for AJAX requests.
- It includes forms for creating, updating, and deleting entities.
- Displays a list of entities fetched from the backend.


