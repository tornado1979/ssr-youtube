import 'babel-polyfill'
import express from 'express'

import render from './render'

const app = express()
const PORT = 5000
app.use(express.static('public'))
app.get('*', (req, res) => {
  const content = render(req.path/* , store, context */)
  res.send(content)
})

app.listen(PORT, () => console.log('Server is listening on PORT ', PORT))
