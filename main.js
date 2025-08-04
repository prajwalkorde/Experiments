const express = require('express')
const mongoose = require('mongoose')
const Employee = require('./models/Employee.js')
const app = express()
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/company');

app.set('view engine', 'ejs');

const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * (arr.length - 1));
  return arr[rno];
}

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  //   res.send('Hello World!')
  res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {
  Employee.deleteMany({}); // Clear existing data
  //   response ie. generate data

  let randomNames=["rohan", "soham", "mohan"]
  let randomLang=["python", "javascript", "java"]
  let randomCities=["delhi", "kolkata", "pune"]
  for (let i = 0; i < 10; i++) {
    let e = Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 100000),
      language: getRandom(randomLang),
      city: getRandom(randomCities),
      isManager: Math.random() > 0.5? true : false
    })
    console.log(e);
  }
  res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})