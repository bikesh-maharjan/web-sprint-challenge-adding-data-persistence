const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/projects", (req, res) => {
  Projects.getProjects().then((project) => {
    res.status(200).json(project);
  }).catch(error=>{
      res.status(500).json({errorMessage: "oh oh something is wrong with the server"})
  })
});
