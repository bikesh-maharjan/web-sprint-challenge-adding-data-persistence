exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("project_resources").insert([
    {
      project_id: 1,
      resouce_id: 1,
    },
    {
      project_id: 1,
      resouce_id: 2,
    },
    {
      project_id: 1,
      resouce_id: 3,
    },
    {
      project_id: 2,
      resouce_id: 2,
    },
    {
      project_id: 3,
      resouce_id: 3,
    },
  ]);
};
