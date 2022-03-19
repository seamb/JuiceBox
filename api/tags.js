const express = require('express');
const tagsRouter = express.Router();


// tagsRouter.use((req, res, next) => {
//   console.log("A request is being made to /tags");

//   next(); // THIS IS DIFFERENT
// });

// tagsRouter.get('/', (req, res) => {
//   res.send({
//     tags: []
//   });
// });

// const { getAllTags } = require('../db');

// // UPDATE
// tagsRouter.get('/', async (req, res) => {
//   const users = await getAllTags();

//   res.send({
//     tags
//   });
// });


tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next(); // THIS IS DIFFERENT
});

const { getAllTags } = require('../db');

// UPDATE
tagsRouter.get('/', async (req, res) => {
  const users = await getAllTags();

  res.send({
    tags
  });
});


module.exports = tagsRouter;