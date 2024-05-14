
import { NextFunction, Request, Response } from "express";
import gateway from "fast-gateway"

const PORT = 1100;

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.token && req.headers.token !== '') {
    next()
  } else {
    res.send({ status: 'error', mesage: 'Unauthorize' })
  }
}


const server = gateway({
  routes: [
    {
      prefix: '/service1',
      target: 'http://service1:100',
      hooks: {

      },
      methods: ["POST", "GET"]
    },
    {
      prefix: '/service2',
      target: 'http://service2:200',
      middlewares: [checkAuth],
      hooks: {

      }
    },
    {
      prefix: '/service3',
      target: 'http://service3:300'
    }
  ]
})

server.get('/api-gateway', (req, resp) => {
  resp.send('this is api gateway')
})

server.start(PORT).then((server) => {
  console.log("Api gateway is running at " + PORT)
})