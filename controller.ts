import express from 'express';
import path from 'path';

const app:express.Application = express();

app.get('/', (req:express.Request, res:express.Response) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'bundle')});
})
app.use(express.static(path.join(__dirname, 'bundle')));

app.listen(8080, ()=>{
  console.log('8080 run');
})