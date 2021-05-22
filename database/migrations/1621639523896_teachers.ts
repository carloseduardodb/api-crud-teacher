import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Teachers extends BaseSchema {
  protected tableName = 'teachers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('surname')
      table.string('email')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
