import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";

connectDB();
app.use(
    cors({
        origin: CLIENT_URL,
    })
);
app.use(express.json());
app.use("/api", router);

app.listen(PORT,() => {
    console.log(`runing on ${PORT}`)
})  
