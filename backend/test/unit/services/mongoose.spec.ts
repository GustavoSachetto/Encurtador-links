import mongoose from "mongoose"
import * as dotenv from "dotenv"

dotenv.config()

describe('MongooseConnection', () => {
  it('should be able to connect to mongodb database', async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URI!)
    expect(connection).toBeInstanceOf(mongoose.Mongoose)
    mongoose.disconnect()
  })
})