import { Response } from 'express'
import fs from 'fs'

export default function renderView (view: string, res: Response, status?: number, dataInserction?: Object) {
  const path = `./src/views/${view}.ejs`
  fs.access(path, (err) => {
    if (err) return res.send('This View doesn\'t exist')

    fs.readFile(path, 'ascii', (err, data) => {
      if (err) return res.send('This View doesn\'t exist')
      return res.status(status ?? 200).render('layout.ejs', { content: data, ...dataInserction })
    })
  })
}
