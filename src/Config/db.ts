import mongoose from 'mongoose'

const DB_URL: string = process.env.DB_URL || ''

export default function connect () {
  mongoose.connect(DB_URL, {
    autoIndex: true
  }).then(() => {
    console.log('Succesfully connected to database')
  }).catch((err) => {
    console.log('Database conenction failed. exiting now...')
    console.log(err.stack)
    console.log(err)
    process.exit(1)
  })
}
