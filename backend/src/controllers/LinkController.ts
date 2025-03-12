import { Link } from "../models/link"
import { Controller } from "./Controller"
import { Request, Response } from "express"

export class LinkController extends Controller {
  public static async listAll(request: Request, response: Response) { 
    const links = await (Link.find()).select(['url', 'shortened'])
    super.successResponse('Link listing retorned successfully', response, { links: links })
  }

  public static async redirectUserByShortened(request: Request, response: Response) { 
    const shortened = request.params.shortened

    try {
      const link = await Link.findOne({ shortened: shortened })
      const linkDoesNotExists = link === null
      if (linkDoesNotExists) throw new Error('Link requested does not exists')
      
      response.redirect(link.url)
    } catch (error: any) {
      super.badResponse(error.message, response)
    }
  }

  public static async getLinkByShortened(request: Request, response: Response) { 
    const shortened = request.params.shortened

    try {
      const link = await Link.findOne({ shortened: shortened })
      const linkDoesNotExists = link === null
      if (linkDoesNotExists) throw new Error('Link requested does not exists')
      
      super.successResponse('Link retorned successfully', response, link.toJSON())
    } catch (error: any) {
      super.badResponse(error.message, response)
    }
  }

  public static async createNewLink(request: Request, response: Response) { 
    const { url } = request.body
    const urlDoesNotExists = typeof url === 'undefined'
    const urlIsEmpty = url === null || url === ''
    
    try {
      if (urlDoesNotExists) throw new Error('URL does not exists')
      if (urlIsEmpty) throw new Error('Empty URL is not allowed')
      
      const link = await Link.create({ url })
      super.createdResponse('Shortened link created successfully', response, link.toJSON())
    } catch (error: any) {
      super.badResponse(error.message, response)
    }
  }

  public static async editLinkByShortened(request: Request, response: Response) {
    const { url } = request.body
    const shortened = request.params.shortened
    
    const urlDoesNotExists = typeof url === 'undefined'
    const urlIsEmpty = url === null || url === ''

    try {
      if (urlDoesNotExists) throw new Error('URL does not exists')
      if (urlIsEmpty) throw new Error('Empty URL is not allowed')
      
      const link = await Link.findOneAndUpdate({ shortened: shortened }, { url: url })
      super.successResponse('Shortened link updated successfully', response, link?.toJSON())
    } catch (error: any) {
      super.badResponse(error.message, response)
    }
  }

  public static async deleteLinkByShortened(request: Request, response: Response) { 
    const shortened = request.params.shortened

    try {
      await Link.findOneAndDelete({ shortened: shortened })
      super.successResponse('Shortened link deleted successfully', response)
    } catch (error: any) {
      super.badResponse(error.message, response)
    }
  }
}