import { Router } from "express"
import { LinkController } from "../controllers/LinkController"

const router = Router()

router.get('/', [], LinkController.listAll)
router.get('/i/:shortened([0-9a-z]{8})', [], LinkController.redirectUserByShortened)
router.get('/shortened/:shortened([0-9a-z]{8})', [], LinkController.getLinkByShortened)

router.post('/', [], LinkController.createNewLink)
router.put('/:shortened([0-9a-z]{8})', [], LinkController.editLinkByShortened)
router.delete('/:shortened([0-9a-z]{8})', [], LinkController.deleteLinkByShortened)

export default router