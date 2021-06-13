import Teacher from 'App/Models/Teacher'
import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Testing routes', () => {
  test('Route add teacher', async (assert) => {
    const { body } = await supertest(BASE_URL).post('/teacher/create').send({
      name: 'Carlos',
      surname: 'Dias',
      email: 'carlos@carlos.com',
    })
    assert.equal(body.status, 'success')
  })

  test('Route edit teacher', async (assert) => {
    const { body, status } = await supertest(BASE_URL).put(`/teacher/update/1`).send({
      name: 'Carlos',
      surname: 'Testing',
      email: 'carlos@carlos.com',
    })
    if (status == 200) {
      assert.ok
    } else {
      assert.notOk
    }
  })

  test('Route edit teacher error', async (assert) => {
    const { error, status } = await supertest(BASE_URL).put(`/teacher/update/1445845`).send({
      name: 'Carlos',
      surname: 'Testing',
      email: 'carlos@carlos.com',
    })
    assert.equal(status, 404)
  })

  test('Route edit teacher error missing input', async (assert) => {
    const { error, status } = await supertest(BASE_URL).put(`/teacher/update/1`).send({
      name: 'Carlos',
      email: 'carlos@carlos.com',
    })
    assert.equal(status, 422)
  })
})
