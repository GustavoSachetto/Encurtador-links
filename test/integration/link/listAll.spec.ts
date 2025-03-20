import { app } from "../app.ts"
import request from "supertest"

const apiRoute = '/api/v1/link'

describe(`GET ${apiRoute}`, () => {
  it('should be able to obtain all links', async () => {
    const response = await request(app).get(apiRoute).send()
    
    expect(response.statusCode).toBe(200)
    expect(response.body.type).toBe('Success')
    expect(response.body).toHaveProperty('message')
    expect(response.body).toHaveProperty('links')
  })
})