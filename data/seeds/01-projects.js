exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects").insert([
    {
      name: "Learn to play guitar",
      desc: "Watch youtube everyday for an hour to learn basic guitar",
      completed: false,
    },
    {
      name: "Build a Website",
      desc: "It is not an easy task to make a website from scratch",
      completed: false,
    },
    {
      name: "Baby Photographs",
      desc: "It may look easy to take photos of babies but you need paitence",
      completed: false,
    },
  ]);
};
