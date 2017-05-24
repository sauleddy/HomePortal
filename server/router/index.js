import fs from 'fs'
import path from 'path'
import Router from 'koa-router'

import { 
  API_ROOT
} from '../../common/constants/Apis';

const router = new Router({prefix: API_ROOT})

let subRouter;

fs.readdirSync(__dirname).filter(filename => filename !== path.basename(__filename))
  .forEach(filename => { subRouter = require(`./${filename}`)
    router.use(subRouter.routes(), subRouter.allowedMethods())
  })

export default router
