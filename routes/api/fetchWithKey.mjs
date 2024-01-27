import express from "express";
import { getData, setData } from "../../redis/index.mjs";

const fetchWithKey = express.Router();

fetchWithKey.get("/", (req, res) => {
  res.send("fetchWithKey/:key");
});

fetchWithKey
  .route("/:key")
  .get((req, res) => {
    const { key } = req.params;
    getData(key)
      .then((result) => res.json({ [key]: result }))
      .catch(({ message }) => {
        res.status(400).json({ message });
      });
  })
  .post((req, res) => {
    const {
      body: { value },
      params: { key },
    } = req;
    setData(key, value)
      .then(() => res.status(200).end())
      .catch(({ message }) => {
        res.status(400).json({ message });
      });
  });

fetchWithKey.param("key", (req, res, next, key) => {
  console.log(`fetching key => ${key}`);
  next();
});
export default fetchWithKey;
