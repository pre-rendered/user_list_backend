const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const app = express();
const router = express.Router();
const port = 4000;

let users = require('../mocks/users')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', router);

router.get('/users', (req, res) => {
  res.json(users)
})

router.post('/users', jsonParser, (req, res) => {
  users.push(req.body)
  res.status(201).json(req.body)
})

router.delete('/users/:id', (req, res) => {
  users = users.filter(user => user.id !== parseInt(req.params.id, 10))
  res.status(204).send()
})

app.listen(port);
