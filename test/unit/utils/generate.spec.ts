import { createRandomString } from "../../../src/utils/generate"

describe('CreateRandomString', () => {
  it('should be able to create random string with eight length', () => {
    const random = createRandomString(8)
    expect(random).toHaveLength(8)
  })

  it('should be able to create random string with numbers and letters uppercase or lowercase', () => {
    const random = createRandomString(45)
    expect(random).toMatch(/^(?=.*[a-zA-Z])(?=.*\d).+$/)
  })
})