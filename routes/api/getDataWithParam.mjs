import express from "express";
import { get, set } from "../../redis/index.mjs";

const getDataWithParam = express.Router();

getDataWithParam.get("/", (req, res) => {
  res.send("getDataWithParam/:key");
});

getDataWithParam.route("/:key").get((req, res) => {
  const { key } = req.params;
  getData(key)
    .then((result) => res.json({ [key]: result }))
    .catch(({ message }) => {
      res.status(400).json({ message });
    });
});

getDataWithParam.param("key", (req, res, next, key) => {
  console.log(`fetching key => ${key}`);
  next();
});
export default getDataWithParam;
