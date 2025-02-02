# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their first name, last name, email, and password.

## Request Body
The request body must be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 3 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

### Example
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
    }
  }
  ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Missing Fields
- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "All fields are required"
      }
    ]
  }
  ```

# User Login Endpoint

## Endpoint
`POST /users/login`

## Description
This endpoint allows an existing user to log in by providing their email and password.

## Request Body
The request body must be a JSON object containing the following fields:
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

### Example
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
    }
  }
  ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Invalid Credentials
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## Notes
- Ensure that the `Content-Type` header is set to `application/json` when making requests to this endpoint.

# User Profile Endpoint

## Endpoint
`GET /users/profile`

## Description
This endpoint allows an authenticated user to retrieve their profile information.

## Request Headers
- `Authorization`: Bearer token or Cookie with the token.

## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": "socket_id_here"
  }
  ```

### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "message": "Unauthorized user"
  }
  ```

# User Logout Endpoint

## Endpoint
`GET /users/logout`

## Description
This endpoint allows an authenticated user to log out by invalidating their token.

## Request Headers
- `Authorization`: Bearer token or Cookie with the token.

## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "message": "Unauthorized user"
  }
  ```

## Notes
- Ensure that the `Authorization` header is set to `Bearer token` or the token is provided in cookies when making requests to these endpoints.


# Captain Registration Endpoint

## Endpoint
`POST /captains/register`

## Description
This endpoint allows a new captain to register by providing their personal and vehicle details.

## Request Body
- `email`: (string) The email of the captain. Must be a valid email address.
- `password`: (string) The password for the captain's account. Must be at least 6 characters long.
- `vehicle.color`: (string) The color of the captain's vehicle. Must be at least 3 characters long.
- `vehicle.plate`: (string) The plate number of the captain's vehicle. Must be at least 3 characters long.
- `vehicle.capacity`: (number) The capacity of the captain's vehicle. Must be at least 1.
- `vehicle.vehicleType`: (string) The type of the captain's vehicle. Must be one of `car`, `motorcycle`, or `auto`.

## Request Example
```json
{
  "email": "captain@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}