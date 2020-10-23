import { Request, Response, NextFunction } from "express"

export type controllerFunction = (req: Request, res: Response, next: NextFunction) => Promise<Response | void>
