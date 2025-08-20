# mern-portfolio

Personal portfolio for Roshan Shrestha (React + Tailwind front-end; Node/Express + MongoDB backend)

Setup

1. Backend

   - cd backend
   - copy `.env.example` to `.env` and set `MONGO_URI` if using Atlas
   - npm install
   - npm run start (or npm run dev for nodemon)

2. Frontend
   - cd frontend
   - npm install
   - npm run start

Deployment

- Frontend: deploy `frontend` (Vite) to Vercel. Ensure build command is `npm run build` and output directory is `dist`.
- Backend: deploy `backend` to Render as a Node service. Set environment variable MONGO_URI to your Atlas connection string.
- Use MongoDB Atlas for production database.
