# Varthak-Library-App

This is a simple Express.js application for managing books with JWT authentication and role-based access control.

## Features

- JWT authentication for secure API access.
- Role-based access control for different user roles (CREATOR, VIEWER, VIEW_ALL).
- Creation and retrieval of books.
- Filtering books based on creation time.
- Integration with MongoDB for data storage.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Smoke221/Varthak-Library-App.git

2. Install Dependencies

   ```
   cd Varthak-Library-App
   npm install

3. Configuration
4. Usage
    ```
   npm run dev

## API Endpoints

### `POST /user/login`
Authenticate user and get JWT token.

### `POST /books`
Create a new book (requires creator role).

### `GET /books`
View books based on user roles and time filters.

#### Query Parameters:
- `old=1`: Show books created 10 minutes ago and more.
- `new=1`: Show books created less than 10 minutes ago.
