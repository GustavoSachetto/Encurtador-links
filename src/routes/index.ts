import link from './link.ts'
import { Router } from "express"

const routes = Router()

routes.use('/link', link)

export default routes