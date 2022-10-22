import Url from '@schemas/UrlSchema'

export default class UrlRepository {
  public static async createUrl (url: string) {
    const doc = await Url.create({ url })

    return doc
  }

  public static async getUrlById (id: string) {
    const doc = await Url.findOne({ _id: id })

    return doc
  }
}
