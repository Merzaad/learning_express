import express from "express";
import fetchWithKey from "./fetchWithKey.mjs";

const api = express.Router();

api.get("/", (req, res) => {
  /* console.log(req.cookies); */
  res.send("api");
});

api.use("/fetchWithKey", fetchWithKey);
export default api;
