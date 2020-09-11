const db = require("../data/dbConfig");

module.exports = {
  getProjects,
  getResources,
  getTasks,
  getTaskForProject,
  addProject,
  addResource,
  addTasks,
};

function getProjects() {
  return db("projects");
}

function getResources() {
  return db("resources");
}

function getTasks() {
  return db("tasks");
}

function getTaskForProject(id) {
  return db("tasks")
    .where({ project_id: id })
    .join("projects", "projects.id", "tasks.projects_id")
    .select("projects.name", "projects.desc", "tasks.name", "tasks.desc");
}

function addProject(project) {
  return db("projects").insert(project);
}

function addResource(resource) {
  return db("resources").insert(resource);
}

function addTasks(task) {
  // console.log(task);
  return db("tasks").insert(task);
  // console.log(letsWork);
}
