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
   git clone https://github.com/Aasess/boiler-plate
   ```


2. **Navigate to the `jwtAuth` folder and install dependencies:**

   ```sh
   cd JwtAuth
   npm install
   ```

4. **Set up environment variables:** Create a `.env` file in both the root and `jwtAuth` directories and add the necessary configuration values (see [Environment Variables](#environment-variables)).

## Project Structure

```
boilerplate-jwt-auth/
├── jwtAuth/
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── config/
│   │   ├── connectDb.js
│   │   └── emailConfig.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   ├── routes/
│   │   ├── userRoutes.js
│   ├── .env
│   ├── app.js
│   └── server.js
├── .env
├── app.js
├── package.json
```

## Usage

1. **Run the server:**

   ```sh
   npm start
   ```

2. **Run the `jwtAuth` server:**

   ```sh
   cd JwtAuth
   npm start
   ```

3. **Access the application:**

   Open your browser and navigate to `http://localhost:8000` (or your configured port).


## Environment Variables

Create a `.env` file in both the root and `jwtAuth` directories with the following variables:


### `jwtAuth` Directory `.env`

```
PORT = 8000
JWT_SECRET_KEY = YOUR_JWT_SECRET_KEY
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USER = 'youremail@gmail.com'
EMAIL_PASS = 'yourpassword'
EMAIL_FROM = 'youremail@gmail.com'
```

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

