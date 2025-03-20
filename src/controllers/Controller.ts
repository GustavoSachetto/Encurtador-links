import { Response } from "express"

export class Controller { 
  protected static createdResponse(message: string, response: Response, content?: any) {
    response.status(201).type('json').send({
      statusCode: 201,
      type: 'Created',
      message: message,
      ...content
    })
  }

  protected static successResponse(message: string, response: Response, content?: any) {
    response.status(200).type('json').send({
      statusCode: 200,
      type: 'Success',
      message: message,
      ...content
    })
  }

  protected static badResponse(message: string, response: Response) {
    response.status(400).type('json').send({
      statusCode: 400,
      type: 'Bad Request',
      message: message
    })
  }
}