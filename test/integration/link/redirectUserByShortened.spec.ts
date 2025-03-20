import { app } from "../app.ts"
import request from "supertest"
import { Link } from "../../../src/models/link.ts"

const apiRoute = '/api/v1/link/i'

describe(`GET ${apiRoute}/:shortened`, () => {
  it('should be able to redirect by shortened link', async () => {
    const links = await Link.find()
    const response = await request(app).get(`${apiRoute}/${links[0].shortened}`).send()
    expect(response.redirect).toBe(true)
  })

  it('should be able to return a error 400', async () => {
    const response = await request(app).get(`${apiRoute}/AgfyuqIF`).send()
    expect(response.statusCode).toBe(400)
    expect(response.body.type).toBe('Bad Request')
    expect(response.body).toHaveProperty('message')
  })
})