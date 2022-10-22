import express from 'express'
import connect from '@config/db'
import UrlController from '@controllers/UrlController'
import renderView from './utils/renderView'

const app = express()
connect()

app.set('view engine', 'ejs')
app.set('views', './src/views')
app.use(express.json())

app.get('/', (req, res) => {
  renderView('index', res)
})

app.get('/:id', UrlController.getLink)

app.post('/', UrlController.registerLink)

export default app
