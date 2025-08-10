const express = require('express')
const mongoose = require('mongoose');
const Employee = require('./models/employee');
const app = express()
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/company');

app.use('/assets', express.static('assets'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', { foo: 'foo' });
})

app.get('/generate', async (req, res) => {
  try {
    let e = await Employee.create({
      name: 'Pohn Doe',
      salary: 1000000,
      language: 'Java',
      city: 'HYDRABAD',
      isManager: false
    });
    res.json({ success: true, employee: e });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})