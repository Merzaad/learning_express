import express from "express";
import { set } from "../../redis/index.mjs";
const postData = express.Router();

postData.route("/").post((req, res) => {
  const {
    body: { key, value },
  } = req;
  console.log(key, value);
  set(key, value)
    .then(() => res.status(200).end())
    .catch(({ message }) => {
      res.status(400).json({ message });
    });
});

export default postData;
