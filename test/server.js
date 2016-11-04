var fake = require('local-fake');

fake.get('/a', function(req) {
  return req;
});

fake.post('/b', function(req) {
  return req;
});

fake.listen(4040);
