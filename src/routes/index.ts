import { Router } from "express"

import home from "@routes/home"

const route: Router = Router()

route.use("/", home)

export default route
