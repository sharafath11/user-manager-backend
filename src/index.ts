import express from "express"
import cors from "cors";
import { connectDB } from "./config/db.js";
import router from "./routes/user.routes.js";

const app = express();
const PORT = 5000

connectDB();
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
app.use(express.json());
app.use("/api", router);

app.listen(PORT,() => {
    console.log(`runing on ${PORT}`)
})  
