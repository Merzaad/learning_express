import express from "express";
import { postRedis } from "../../redis/index.mjs";
const postData = express.Router();

postData.route("/").post((req, res) => {
  const {
    body: { key, value },
  } = req;
  postRedis(key, value)
    .then(() => res.status(200).end())
    .catch(({ message }) => {
      res.status(400).json({ message });
    });
});

export default postData;
