const middleware = (req, res, next) => {
  res.status(200);
  res.send(
    '<ul style="font-size: 1.5rem"><li><a href="/api/fetchWithKey">api/fetchWithKey</a></li><li><a href="/index.html">index.html</a></li></ul>'
  );

  next();
};
export default middleware;
