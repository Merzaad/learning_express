import express from "express";
import { get } from "../../redis/index.mjs";

const getData = express.Router();

getData.route("/").get((req, res) => {
  const { body } = req;
  get(body.key)
    .then((result) => {
      res.json({ [body.key]: result });
    })
    .catch(({ message }) => {
      res.status(400).json({ message });
    });
});

export default getData;
