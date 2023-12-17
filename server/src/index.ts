import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/connection";
import registerRoute from "./router/registerRoute";
import loginRoute from "./router/loginRoute";
import authRoute from "./router/authRoute";
import userRoute from "./router/userRoute";

const app = express();
const PORT = 8080;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("tiny")); // Logs get requests on the console
app.disable("x-powered-by"); // less hackers know about our stack

app.get("/", (req: Request, res: Response) => {
  res.status(201).json("Home GET Request");
});

// API routes
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

// Start server only when we have a valid connection
connect()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log(`Cannot connect to the server...${error}`);
    }
  })
  .catch((error) => {
    console.log(`Invalid database connection... ${error}`);
  });
