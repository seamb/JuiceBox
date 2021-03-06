const express = require('express');
const usersRouter = express.Router();
const getUserByUsername = express.Router();

// usersRouter.use((req, res, next) => {
//   console.log("A request is being made to /users");

//   next(); // THIS IS DIFFERENT
// });

// const { getAllUsers } = require('../db');

// // UPDATE
usersRouter.post('/login', async (req, res, next) => {
  console.log(req.body);
  res.end();
});

usersRouter.get('/', async (req, res) => {
  const users = await getAllUsers();

  res.send({
    users
  });
});

const { SECRET = 'server secret'} = process.env;
console.log('**PROCESS DOT ENV**', process.env.JWT_SECRET);


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
  } catch(error) {
    console.log(error);
    next(error);
  }
});

const jwt = require('jsonwebtoken');

const token = jwt.sign({ id: 3, username: 'joshua' }, SECRET, { expiresIn: '1h' });


console.log(token, "token");
const recoveredData = jwt.verify(token, SECRET);

const decripted = jwt.verify(token, SECRET);

console.log('decrpted', decripted);

module.exports = usersRouter;