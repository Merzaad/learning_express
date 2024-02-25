import express from "express";
import getDataWithParam from "./getDataWithParam.mjs";
import postData from "./postData.mjs";
import getData from "./getData.mjs";

const api = express.Router();

api.get("/", (req, res) => {
  /* console.log(req.cookies); */
  res.send("api");
});

api.use("/getDataWithParam", getDataWithParam);
api.use("/postData", postData);
api.use("/getData", getData);

export default api;
