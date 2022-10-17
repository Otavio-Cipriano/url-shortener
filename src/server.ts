import express from 'express'
import connect from '@config/db'
import UrlController from '@controllers/UrlController'

const app = express()
connect()

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ messsage: 'Hello world' })
})

app.get('/:id', UrlController.getLink)

app.post('/', UrlController.registerLink)

export default app
