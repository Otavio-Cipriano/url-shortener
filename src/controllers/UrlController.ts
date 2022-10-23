import UrlService from '@services/UrlService'
import { Request, Response } from 'express'
import { Types } from 'mongoose'
import renderView from 'src/utils/renderView'
import validator from 'validator'

export default class UrlController {
  public static async registerLink (req: Request, res: Response) {
    const { url } = req.body
    if (url) return res.status(400).send({ error: 'You must provide a URl' })

    const isValid = validator.isURL(url)
    if (!isValid) return res.status(400).send({ error: 'URL Provided is no valid' })

    const result = await UrlService.registerUrl(url)
    if (!result?.success) return res.status(406).send({ error: 'something went wrong at registering url' })

    const data = result.data
    return res.status(201)
      .send({
        originalUrl: data?.url,
        shortUrl: `${req.protocol}://${req.headers.host}/${data?.id}`,
        created_at: data?.created_at
      })
  }

  public static async getLink (req: Request, res: Response) {
    const { id } = req.params

    if (!id) return renderView('page404', res, 404)
    if (!Types.ObjectId.isValid(id)) return renderView('page404', res, 404)

    const query = await UrlService.getUrl(id)

    if (!query?.success) return res.status(400).send({ error: 'Ops, This page doesn\'t exist' })

    return res.redirect(query?.data?.url ? query?.data?.url : `${req.protocol}://${req.headers.host}`)
  }
}
