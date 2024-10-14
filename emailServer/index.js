import express from "express";
import cors from "cors";
import respRouter from "./routes/resp.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", respRouter);

app.use((err, req, res, next) => {
  const errstatus = err.status || 500;
  const errmessage = err.message || "Something went wrong";

  // console.log(err);
  res.status(errstatus).json({
    success: false,
    status: errstatus,
    errmessage: errmessage,
    stack: err.stack,
  });
});

app.listen(5000, () => {
  console.log("Server runing");
});
