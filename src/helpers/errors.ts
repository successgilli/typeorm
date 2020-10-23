import { CustomError } from "@interface/error"

/**
 * @param {string}  message - A string param.
 * @return {Error} - Error object
 */
export const notFoundError = (message = "Resource does not exist"): Error => {
  const error: CustomError = new Error(message)
    
  error.status = 404

  return error
}
