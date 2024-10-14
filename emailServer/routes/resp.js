import express from "express";
import sendMail from "../email.js";
// import { connection } from "../db.js";

const Router = express.Router();

Router.post("/email", async (req, res, next) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      freightType: req.body.freightType,
      note: req.body.note,
    };
    console.log(data);
    await sendMail("joelconrad277@gmail.com", data);
    return res.status(200).json({ success: true, message: "Email sent" });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default Router;
