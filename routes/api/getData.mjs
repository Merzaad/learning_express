import express from "express";
import { getRedis } from "../../redis/index.mjs";

const getData = express.Router();

getData.route("/").get((req, res) => {
  const { body } = req;
  getRedis(body.key)
    .then((result) => {
      res.json({ [body.key]: result });
    })
    .catch(({ message }) => {
      res.status(400).json({ message });
    });
});

export default getData;
