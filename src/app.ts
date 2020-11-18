import "module-alias/register"
import "reflect-metadata"
import express, { Request } from "express"
import swaggerOptions from "@config/swagger"
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { createConnection } from "typeorm"

import "@config/env"
import { notFoundError } from "@helpers/errors"
import errorHandler from "@middlewares/error"
import logger from "@logger"
import routes from "@routes/index"

const PORT: number | string = process.env.PORT || 5000

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const swaggerDocs = swaggerJsDoc(swaggerOptions(PORT))

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use("/api/v1", routes)

app.all("*", (req: Request ): never => {
  throw notFoundError(`PATH ${req.path} does not exist`);
});
app.use(errorHandler)

createConnection().then(() => {
  logger.info(`connecting to database`)
}).then(() => {
  app.listen(PORT, () => logger.info(`listening on port ${PORT}`))
}).catch((error) => {
  logger.info(`database error: ${error.message}`)
})

export default app
