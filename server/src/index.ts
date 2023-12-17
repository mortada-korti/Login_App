import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
