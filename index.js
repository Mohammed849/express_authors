const express = require('express');
const port = 3000;
const app = express();
const authors = [
  {
    name: 'Lawrence Nowell',
    nationality: 'UK',
    id: '1',
  },
  {
    name: 'William Shakespeare',
    nationality: 'UK',
    id: '2',
  },
  {
    name: 'Charles Dickens',
    nationality: 'US',
    id: '3',
  },
  {
    name: 'Oscar Wilde',
    nationality: 'UK',
    id: '4',
  },
];

app.get('/', (req, res) => {
  res.send('Authors API');
});
app.get('/authors/:id', (req, res) => {
  console.log(req.params.id);
  const resultAuthors = authors.find((element) => element.id === req.params.id);
  res.send('${resultAuthors.name}, ${resultAuthors.nationality} ');
});

app.get('*', (req, res) => {
  res.send('All routes');
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
