import Teacher from 'App/Models/Teacher'
import test from 'japa'
import { JSDOM } from 'jsdom'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Testing status', () => {
  test('ensure home page works', async (assert) => {
    const { text } = await supertest(BASE_URL).get('/').expect(200)
    const data = `{"status":"online"}`
    assert.equal(text, data)
  })

  test('ensure teacher is successfully saved', async (assert) => {
    const teacher = new Teacher()
    teacher.email = 'virk@adonisjs.com'
    teacher.name = 'Carlos'
    teacher.surname = 'Batista'
    const teacher_response = await teacher.save()

    assert.equal(teacher_response, teacher)

    test('ensure teacher is successfully updated', async (assert) => {
      const verifyModify = teacher_response
      const teacher = await Teacher.findBy('id', teacher_response.id)
      if (teacher) {
        teacher.email = 'outro@emailqualquer.com.com'
        teacher.name = 'Sujeito'
        teacher.surname = 'Teste'
        teacher.save()
        assert.notEqual(teacher.email, verifyModify.email)
      } else {
        assert.isFalse(true)
      }
    })

    test('ensure teacher is successfully deleted', async (assert) => {
      const teacher = await Teacher.findBy('id', teacher_response.id)
      await teacher?.delete()
      assert.isTrue(teacher?.$isDeleted)
    })
  })
})
