import { Router, Request, Response } from 'express'
import apiRouter from './apiRouter'
import { httLogger,formatHTTPLoggerResponse } from '../service/logger'


export const router = Router()

router.use('/api/v1', apiRouter)

router.get('/', (req:Request, res:Response)=>{
  httLogger.info("Success Message",formatHTTPLoggerResponse(req,res,"true"))
    res.status(200).json({
        code:200,
        status:'success',
        message: 'Welcome to BCR Car Rental',
        data:null
    })
    // httLogger.info('Success message', )
})

router.use((req:Request, res:Response) => {
    res.status(404).json({
      code: 404,
      status: 'error',
      message: 'Route not found',
      data: null
    })
  })

export default router