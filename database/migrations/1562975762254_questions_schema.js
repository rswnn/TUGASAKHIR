'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionsSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.integer('number', 30).notNullable()
      table.text('description').notNullable()
      table.enu('type', ['multiple choice', 'multi select', 'text', 'video recorder']).notNullable()
      table.string('options', 255)
      table.string('answer', 255)
      table.integer('timer', 30)
      table.timestamps()
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionsSchema
