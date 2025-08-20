# Backend (Express + MongoDB)

Files:

- `server.js` - app entry
- `config/db.js` - connects to MongoDB using `process.env.MONGO_URI` or local fallback
- `routes/contact.js` - POST /api/contact
- `controllers/messageController.js` - saves messages to MongoDB
- `models/Message.js` - Mongoose schema

Local MongoDB setup and running backend

1. Install MongoDB Community Server on your machine if not already installed:

   - Windows: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/
   - macOS: use Homebrew
   - Linux: follow distro instructions

2. Start the MongoDB server (example on Windows):

   - Open PowerShell or terminal and run:
     mongod --dbpath "C:\\data\\db"
   - Or use the MongoDB Desktop app/Compass to start a local server.

3. Verify connection:

   - In a new terminal run:
     mongosh
   - Then run:
     show dbs

4. Start the backend server:
   cd backend
   npm install
   npm run dev

The backend will read `MONGODB_URI` from `.env`. By default it's set to `mongodb://localhost:27017/mern-portfolio`.

If you want to use MongoDB Atlas, replace `MONGODB_URI` in `.env` with your Atlas connection string.
