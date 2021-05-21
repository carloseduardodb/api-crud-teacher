import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TeachersController {
  public async index({ request, response }: HttpContextContract) {
    return response.json({
      olá: true,
    })
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
