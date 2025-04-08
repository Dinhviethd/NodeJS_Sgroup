import express from 'express'
import userController from '../../controllers/user.controller.js'
import { ValidateUserId } from '../../middlewares/user.validate.js'
import DbHelper from '../../helpers/DbHelper.js'
const router = express.Router()

router.route('/')
    .get( userController.GetAll )
    .post( userController.postAll)

router.route('/:id')
    .get( ValidateUserId, userController.GetById )
    .put( ValidateUserId, userController.putByID)
    .delete( ValidateUserId, userController.deleteByID)


export default router