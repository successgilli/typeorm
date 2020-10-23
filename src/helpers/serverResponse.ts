import { Request, Response } from "express"

import { dataObject } from "@interface/reponse"
import logger from "@logger"

export default (
  request: Request,
  response: Response,
  status = 200, message = "successful",
  data: dataObject = {},
  success = true
): Response => {
  logger.info(
    `${request.originalUrl}-${request.method}-${request.ip}-${status}-data:${JSON.stringify(data)}
    -message:${message}`
  )

  return response.status(status).json({
    success,
    message,
    status,
    data,
  }) 
}
