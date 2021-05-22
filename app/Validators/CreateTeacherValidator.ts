import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateTeacherValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string({}, [rules.minLength(3), rules.maxLength(50), rules.required()]),
    surname: schema.string({}, [rules.minLength(3), rules.maxLength(50), rules.required()]),
    email: schema.string({}, [rules.email(), rules.required()]),
  })
  public messages = {}
}
