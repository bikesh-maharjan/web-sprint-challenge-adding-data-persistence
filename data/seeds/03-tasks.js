exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks").insert([
    {
      desc: "You can Rock and Roll with this awesome guitar",
      notes: "",
      completed: true,
      project_id: 1,
    },
    {
      desc: "You are the creator and designer for the website. Be creative!",
      notes: "",
      completed: false,
      project_id: 2,
    },
    {
      desc: "The canon camera takes an absolutely stunning photos.",
      notes: "",
      completed: false,
      project_id: 3,
    },
  ]);
};
