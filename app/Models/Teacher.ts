import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Teacher extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: false })
  public name: string

  @column({ isPrimary: false })
  public surname: string

  @column({ isPrimary: false })
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
