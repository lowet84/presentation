import { TestController } from './controllers/TestController'
import { DummyController } from './Controllers/DummyController'

var dev = process.argv[2] === 'dev'

var config = {
  cors: dev,
  controllers: [TestController, DummyController]
}

export { config }
