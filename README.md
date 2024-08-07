# Todo App API

A simple RESTful API for managing todos, built with Node.js, Express, and PostgreSQL using Prisma ORM.

## Installation

1. Clone the repository:
clone my repo
```
cd "downloaded repo name"
```
2. Install dependencies:
```
npm install
```
3. Set up your environment variables:
Create a `.env` file in the root directory and add:
```
DATABASE_URL="postgresql://yourusername:yourpassword@localhost:5432/todoapp"
PORT=3000
```
4. Run Prisma migrations:
```
npx prisma migrate dev
```

## Running the API

To start the server in development mode:
```
npm run dev
```

## API Endpoints
```
- GET `/api/todos`: Get all todos
- GET `/api/todos/:id`: Get a specific todo
- POST `/api/todos`: Create a new todo
- PUT `/api/todos/:id`: Update a todo
- DELETE `/api/todos/:id`: Delete a todo
```