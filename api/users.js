const express = require('express');
const usersRouter = express.Router();
const getUserByUsername = express.Router();

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next(); // THIS IS DIFFERENT
});

const { getAllUsers } = require('../db');

// UPDATE
usersRouter.get('/', async (req, res) => {
  const users = await getAllUsers();

  res.send({
    users
  });
});

usersRouter.post('/login', async (req, res, next) => {
  console.log(req.body);
  res.end();
});

usersRouter.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  // request must have both
  if (!username || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password"
    });
  }

  try {
    const user = await getUserByUsername(username);

    if (user && user.password == password) {
      // create token & return to user
      res.send({ message: "you're logged in!" });
    } else {
      next({ 
        name: 'IncorrectCredentialsError', 
        message: 'Username or password is incorrect'
      });
    }
    console.log(getUserbyUsername,"get user name" );

  const jwt = require('jsonwebtoken');

  const token = jwt.sign({ id: 3, username: 'joshua' }, 'server secret');

  const recoveredData = jwt.verify(token, 'server secret');

  } catch(error) {
    console.log(error);
    next(error);
  }


});

module.exports = usersRouter;