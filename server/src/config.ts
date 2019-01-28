import { TestController } from './controllers/TestController'

var dev = process.argv[2] === 'dev'

var config = {
  cors: dev,
  controllers: [TestController]
}

export { config }
