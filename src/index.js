const express = require('express');

const app = express();
const router = express.Router();
const port = 4000;

app.use('/api', router);

router.get('/users', (req, res) => {
  res.send({
    data: [
      {
        id: 1,
        name: 'Griffin McElroy',
        email: 'griffin.mcelroy@maximumfun.org',
        birthday: 'April 17, 1987',
        zipCode: 25755
      },
      {
        id: 2,
        name: 'Travis McElroy',
        email: 'travis.mcelroy@maximumfun.org',
        birthday: 'November 8, 1983',
        zipCode: 25755
      },
      {
        id: 2,
        name: 'Justin McElroy',
        email: 'justin.mcelroy@maximumfun.org',
        birthday: 'November 8, 1980',
        zipCode: 25755
      },
    ]
  })
})

app.listen(port);
