exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.text("name", 255).notNullable().unique();
      tbl.text("desc", 255);
      tbl.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.text("name", 255).notNullable().unique();
      tbl.text("desc", 255);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.text("desc", 255).notNullable();
      tbl.text("notes", 255);
      tbl.boolean("completed").notNullable().defaultTo(false);

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references()
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("project_resources", (tbl) => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl
        .integer("resouce_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema

    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
