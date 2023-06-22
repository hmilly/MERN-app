import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server ready"));

app.use(notFound);
app.use(errorHandler);

//  post   /api/users           Register a user
//  post   /api/users/auth      Authenticate a user and get a token
//  post   /api/users/logout    Logout a user and clear cookie
//  get    /api/users/profile   Get user profile
//  put    /api/users/profile   Update profile

app.listen(port, () => console.log(`listening on port: ${port}`));
