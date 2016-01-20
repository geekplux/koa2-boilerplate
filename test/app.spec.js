import app from '../app'
import supertest from 'supertest'

const request = supertest.agent(app.listen())

describe('Hello World', function () {
  it('should say "Hello World"', function (done) {
    request
      .get('/')
      .expect(200)
      .expect('Hello World', done)
  })
})

