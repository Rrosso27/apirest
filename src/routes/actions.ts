import { Router } from 'express'
import { getActions ,getAction, deleteAction, postAction, putAction } from '../controllers/actions.controlle';

const router = Router()

router.get('/', getActions)
router.get('/:id', getAction)
router.delete('/:id', deleteAction)
router.post('/',postAction)
router.put('/:id',putAction)
export default router 