# User Manager Backend

Backend for the full stack user management application.

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- TypeScript

## API Endpoints

- `GET /api/users`
- `POST /api/users`
- `PATCH /api/users/:id`

## Environment

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
CLIENT_URL=http://localhost:3000
```

## Run Locally

```bash
npm install
npm run dev
```

The server runs on `http://localhost:5000`.

## Deployment

For Render, set:

```env
MONGO_URI=your_production_mongodb_connection_string
CLIENT_URL=https://your-frontend.vercel.app
```

`PORT` can be left to Render if it injects one automatically.
