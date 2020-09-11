const server = require("./server.js");

const PORT = process.env.PORT || 8003;

server.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}...`);
});
