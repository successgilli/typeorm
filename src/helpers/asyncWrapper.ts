import { Request, Response, NextFunction } from "express"


import { controllerFunction } from "@interface/function"

export default (wrappedFunction: controllerFunction) => (
  async (request: Request, response: Response, next: NextFunction): Promise<Response | void> => {
    try {
      await wrappedFunction(request, response, next);
    } catch (error) {
      return next(error);
    }
  }
);
