# Boilerplate Project with JWT Authentication

## Overview

Welcome to the **Boilerplate Project with JWT Authentication**! This project serves as a foundational template for Node.js applications, featuring robust user authentication mechanisms using JSON Web Tokens (JWT). The authentication system is encapsulated in a secondary project folder named `jwtAuth`.

### Features

- User Registration
- User Login
- Password Change
- Password Reset Email
- Password Reset

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/boilerplate-jwt-auth.git
   cd boilerplate-jwt-auth
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Navigate to the `jwtAuth` folder and install dependencies:**

   ```sh
   cd jwtAuth
   npm install
   ```

4. **Set up environment variables:** Create a `.env` file in both the root and `jwtAuth` directories and add the necessary configuration values (see [Environment Variables](#environment-variables)).

## Project Structure

```
boilerplate-jwt-auth/
├── jwtAuth/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   ├── email.js
│   │   └── jwt.js
│   ├── .env
│   ├── app.js
│   └── server.js
├── .env
├── app.js
├── package.json
└── README.md
```

## Usage

1. **Run the server:**

   ```sh
   npm start
   ```

2. **Run the `jwtAuth` server:**

   ```sh
   cd jwtAuth
   npm start
   ```

3. **Access the application:**

   Open your browser and navigate to `http://localhost:3000` (or your configured port).

## API Endpoints

### Authentication Endpoints

- **Register a new user**

  ```http
  POST /auth/register
  ```

  - **Request Body:**

    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "yourpassword"
    }
    ```

- **Login a user**

  ```http
  POST /auth/login
  ```

  - **Request Body:**

    ```json
    {
      "email": "john.doe@example.com",
      "password": "yourpassword"
    }
    ```

- **Change password**

  ```http
  POST /auth/change-password
  ```

  - **Request Body:**

    ```json
    {
      "oldPassword": "oldpassword",
      "newPassword": "newpassword"
    }
    ```

- **Request password reset email**

  ```http
  POST /auth/request-reset-password
  ```

  - **Request Body:**

    ```json
    {
      "email": "john.doe@example.com"
    }
    ```

- **Reset password**

  ```http
  POST /auth/reset-password
  ```

  - **Request Body:**

    ```json
    {
      "token": "resetToken",
      "newPassword": "newpassword"
    }
    ```

## Environment Variables

Create a `.env` file in both the root and `jwtAuth` directories with the following variables:

### Root `.env`

```
PORT=3000
JWT_SECRET=yourjwtsecret
JWT_EXPIRES_IN=1h
EMAIL_SERVICE=yourEmailService
EMAIL_USERNAME=yourEmailUsername
EMAIL_PASSWORD=yourEmailPassword
```

### `jwtAuth` Directory `.env`

```
PORT=3001
JWT_SECRET=yourjwtsecret
JWT_EXPIRES_IN=1h
EMAIL_SERVICE=yourEmailService
EMAIL_USERNAME=yourEmailUsername
EMAIL_PASSWORD=yourEmailPassword
```

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

