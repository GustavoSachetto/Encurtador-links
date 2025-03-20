import { app } from "../app.ts"
import request from "supertest"
import { Link } from "../../../src/models/link.ts"

const apiRoute = '/api/v1/link/shortened'

describe(`GET ${apiRoute}/:shortened`, () => {
  it('should be able to redirect by shortened link', async () => {
    const url = 'https://youtube.com.br'
    const link = await Link.create({ url: url })
    const response = await request(app).get(`${apiRoute}/${link.shortened}`).send()
    
    expect(response.statusCode).toBe(200)
    expect(response.body.type).toBe('Success')
    expect(response.body).toHaveProperty('message')
    expect(response.body).toHaveProperty('_id')
    expect(response.body).toHaveProperty('url')
    expect(response.body).toHaveProperty('createdAt')
    expect(response.body).toHaveProperty('updatedAt')
    expect(response.body).toHaveProperty('shortened')
    expect(response.body).toHaveProperty('__v')
  })

  it('should be able to return a error 400', async () => {
    const response = await request(app).get(`${apiRoute}/AgfyuqIF`).send()
    expect(response.statusCode).toBe(400)
    expect(response.body.type).toBe('Bad Request')
    expect(response.body).toHaveProperty('message')
  })
})