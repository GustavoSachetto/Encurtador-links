import { app } from "../app"
import request from "supertest"

const apiRoute = '/api/v1/link'

describe(`POST ${apiRoute}`, () => {
  it('should be able to create a shortened link', async () => {
    const url = 'https://youtube.com.br'
    const response = await request(app).post(apiRoute).send({ url: url })

    expect(response.statusCode).toBe(201)
    expect(response.body.type).toBe('Created')
    expect(response.body.url).toBe(url)
    expect(response.body).toHaveProperty('message')
    expect(response.body).toHaveProperty('_id')
    expect(response.body).toHaveProperty('createdAt')
    expect(response.body).toHaveProperty('updatedAt')
    expect(response.body).toHaveProperty('shortened')
    expect(response.body).toHaveProperty('__v')
  })

  it('should be able to return a error 400', async () => {
    const response = await request(app).post(apiRoute).send()

    expect(response.statusCode).toBe(400)
    expect(response.body.type).toBe('Bad Request')
    expect(response.body).toHaveProperty('message')
  })
})