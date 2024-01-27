(async () => {
  try {
    return await fetch("http://localhost:3000");
  } catch (error) {
    console.log(error);
  }
})();
