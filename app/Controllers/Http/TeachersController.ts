import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Teacher from 'App/Models/Teacher'
import CreateTeacherValidator from 'App/Validators/CreateTeacherValidator'
import UpdateTeacherValidator from 'App/Validators/UpdateTeacherValidator'

export default class TeachersController {
  public async index({ response }: HttpContextContract) {
    return response.status(200).json(await Teacher.all())
  }

  public async create({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateTeacherValidator)
    const status = await Teacher.create(data)
    if (!!status) {
      return response.status(201).json({
        status: 'success',
      })
    } else {
      return response.badRequest()
    }
  }

  public async show({ params, response }: HttpContextContract) {
    const { id } = params
    const teacher = await Teacher.findBy('id', id)
    return response.status(200).json(teacher)
  }

  public async edit({}: HttpContextContract) {}

  public async update({ params, request, response }: HttpContextContract) {
    const { id } = params
    const teacher = await Teacher.findByOrFail('id', id)
    const { name, surname, email } = await request.validate(UpdateTeacherValidator)
    teacher.name = name
    teacher.surname = surname
    teacher.email = email
    await teacher.save()
    return response.status(200).json(teacher)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const { id } = params
    const teacher = await Teacher.findBy('id', id)
    await teacher?.delete()

    return teacher
      ? response.status(200).json({
          status: 'success',
        })
      : response.status(501).json({
          status: 'error',
        })
  }
}
