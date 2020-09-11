exports.seed = function (knex) {
  return knex("resources").insert([
    {
      name: "Types of Guitar",
      desc: "You can find the types of guitar and whats it made out of",
    },
    {
      name: "Website Template Online",
      desc: "Build your website using favorite template",
    },
    {
      name: "Canon",
      desc: "The best available camera in the market",
    },
  ]);
};
