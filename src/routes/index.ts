import link from './link'
import { Router } from "express"

const routes = Router()

routes.use('/link', link)

export default routes