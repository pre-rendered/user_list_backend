const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();
const port = 4000;

app.use(cors());
app.use('/api', router);

router.get('/users', (req, res) => {
  res.json(
    [
      {
        id: 1,
        name: 'Griffin McElroy',
        email: 'griffin.mcelroy@maximumfun.org',
        birthday: 'April 17, 1987',
        zipcode: 25755
      },
      {
        id: 2,
        name: 'Travis McElroy',
        email: 'travis.mcelroy@maximumfun.org',
        birthday: 'November 8, 1983',
        zipcode: 25755
      },
      {
        id: 2,
        name: 'Justin McElroy',
        email: 'justin.mcelroy@maximumfun.org',
        birthday: 'November 8, 1980',
        zipcode: 25755
      },
    ]
  )
})

app.listen(port);
