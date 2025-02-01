const app = require("./app");
const redisClient = require("./cache/redisClient");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});