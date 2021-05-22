import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Teacher from 'App/Models/Teacher'
import { validator, schema } from '@ioc:Adonis/Core/Validator'
import CreateTeacherValidator from 'App/Validators/CreateTeacherValidator'

export default class TeachersController {
  public async home({}: HttpContextContract) {}

  public async index({ request, response }: HttpContextContract) {
    return response.json({
      olá: true,
    })
  }

  public async create({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateTeacherValidator)
    const status = await Teacher.create(data)
    if (!!status) {
      return response.status(200).json({
        status: 'success',
      })
    } else {
      return response.badRequest()
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
