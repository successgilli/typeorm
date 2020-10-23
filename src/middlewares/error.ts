import { Request, Response, NextFunction } from "express"

import logger from "@logger"
import { CustomError } from "@interface/error"

export default (err: CustomError, req: Request, res: Response, next: NextFunction): Response | void => {
  const status = err.status || 500

  if (res.headersSent) {
    return next(err)
  }

  logger.info(`Error: ${req.originalUrl}-${req.method}-${req.ip}-${status}-message: ${err.message}`)
  return res.status(status || 500).json({
    success: false,
    status,
    message: err.message
  })
}
