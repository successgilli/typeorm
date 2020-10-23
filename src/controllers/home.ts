import { Request, Response } from "express"

import serverResponse from "@helpers/serverResponse"

/**
 * @param {Request}  req - A string param.
 * @param {Response}  res - A string param.
 * @return {Promise<Response>} - and asynchronous reponse object
 */
export const welcome = async (req: Request, res: Response): Promise<Response> => {
  const message = "welcome to sensei"

  return serverResponse(req, res, 200, message)
}
