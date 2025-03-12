import mongoose from "mongoose"
import * as dotenv from "dotenv"
import { ILink, Link } from "../../../src/models/link"

dotenv.config()

describe('LinkModel', () => {  
  let link: ILink

  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI!)
  })

  afterEach(async () => {
    await mongoose.connection.close()
  })
  
  it('should be able to create new shortened link', async () => {
    const url = 'https://youtube.com.br'
    link = await Link.create({ url: url })
    
    expect(link.url).toMatch(url)
    expect(link.shortened).toBeDefined()
    expect(link.shortened).toHaveLength(8)
  })
  
  it('should be able to get link by shortened', async () => {
    const newLink = await Link.findOne({ shortened: link.shortened })
    expect(newLink?.url).toMatch(link?.url)
  })

  it('should be able to update link by shortened', async () => {
    const newUrl = 'https://gustavosachetto.site'
    await Link.findOneAndUpdate({ shortened: link.shortened }, { url: newUrl })
    const updatedLink = await Link.findOne({ shortened: link.shortened })
    expect(updatedLink?.url).toMatch(newUrl)
  })

  it('should be able to delete link by shortened', async () => {
    await Link.findOneAndDelete({ shortened: link.shortened })
    const removedLink = await Link.findOne({ shortened: link.shortened })
    expect(removedLink).toBeNull()
  })
})