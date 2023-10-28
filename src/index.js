import express from "express";
import { createConnection } from "./db/index.js";
import user from "./routes/user.js";

const app = express();
createConnection();
app.use(express.json());
app.use("/user", user);
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});



