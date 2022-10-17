require('dotenv').config()

// eslint-disable-next-line import/first
import app from './server'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
