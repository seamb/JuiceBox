const express = require('express');
const postsRouter = express.Router();

// postsRouter.use((req, res, next) => {
//   console.log("A request is being made to /posts");

//   next(); // THIS IS DIFFERENT
// });

// postsRouter.get('/', (req, res) => {
//   res.send({
//     posts: []
//   });
// });

// const { getAllPosts } = require('../db');

// // UPDATE
// postsRouter.get('/', async (req, res) => {
//   const users = await getAllPosts();

//   res.send({
//     posts
//   });
// });

postsRouter.use((req, res, next) => {
  console.log("A request is being made to /posts");

  next(); // THIS IS DIFFERENT
});

const { getAllPosts } = require('../db');

// UPDATE
postsRouter.get('/', async (req, res) => {
  const users = await getAllPosts();

  res.send({
    posts
  });
});


module.exports = postsRouter;