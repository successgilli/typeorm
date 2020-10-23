import { Router } from "express"

import asyncWrapper from "@helpers/asyncWrapper"
import { welcome } from "@controllers/home"

const route: Router = Router()

/**
 * @swagger
 * /api/v1:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    description: welcome route
 *    responses:
 *      '200':
 *        description: A successful response
 */
route.get("/", asyncWrapper(welcome))

export default route
