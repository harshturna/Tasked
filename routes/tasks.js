const express = require("express");
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} = require("../controllers/tasks");

// Initialize router
const router = express.Router();

// Routes @ /api/v1/tasks
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
