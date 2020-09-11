const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ errorMessage: "oh oh something is wrong with the server" });
    });
});

router.get("/resources", (req, res) => {
  Projects.getResources()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ errorMessage: "oh oh something is wrong with the server" });
    });
});

router.get("/tasks", (req, res) => {
  Projects.getTasks()
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ errorMessage: "oh oh something is wrong with the server" });
    });
});

router.get("/tasks/:id", (req, res) => {
  const id = req.params.id;

  Projects.getTaskForProject(id)
    .then((projectId) => {
      res.status(200).json(projectId);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ errorMessage: "Oh oh something is wrong with the server" });
    });
});

router.post("/", (req, res) => {
  Projects.addProject(req.body)
    .then((addproject) => {
      res.status(201).json(addproject);
    })
    .catch((error) => {
      res.status(400).json({ errorMessage: "Couldn't add the item" });
    });
});

router.post("/resources", (req, res) => {
  Projects.addResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((error) => {
      res.status(400).json({ errorMessage: "Couldn't add the item" });
    });
});

router.post("/tasks", (req, res) => {
  Projects.addTasks(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((error) => {
      res.status(400).json({ errorMessage: "Couldn't add the item" });
    });
});

module.exports = router;
