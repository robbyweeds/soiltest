const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html', 'index.html'));
  })


app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html', 'about.html'));
  })

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html', 'contact.html'));
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })