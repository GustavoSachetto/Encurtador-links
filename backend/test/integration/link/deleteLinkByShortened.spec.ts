import { app } from "../app"
import request from "supertest"
import { Link } from "../../../src/models/link"

const apiRoute = '/api/v1/link'

describe(`DELETE ${apiRoute}/:shortened`, () => {
  it('should be able to delete a shortened link', async () => {
    const links = await Link.find()
    const response = await request(app).delete(`${apiRoute}/${links[0].shortened}`).send()

    expect(response.statusCode).toBe(200)
    expect(response.body.type).toBe('Success')
    expect(response.body).toHaveProperty('message')
  })

  it('should be able to return a error 404', async () => {
    const response = await request(app).delete(`${apiRoute}/SFTE`).send()
    expect(response.statusCode).toBe(404)
  })
})