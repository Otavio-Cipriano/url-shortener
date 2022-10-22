import UrlRepository from '@repositories/UrlRepository'

export default class UrlService {
  public static async registerUrl (url: string) {
    try {
      const newUrl = await UrlRepository.createUrl(url)

      if (newUrl) return { success: true, data: newUrl }
    } catch (error) {
      console.log(error)
      return { success: false, data: null }
    }
  }

  public static async getUrl (id: string) {
    try {
      const url = await UrlRepository.getUrlById(id)

      return { success: true, data: url }
    } catch (error) {
      console.log(error)
      return { success: false, data: null }
    }
  }
}
