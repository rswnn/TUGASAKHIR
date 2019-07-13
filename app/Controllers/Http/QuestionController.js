'use strict'

const Question = use('App/models/Question')

class QuestionController {
    async index({ response }) {
        try {
          const question = await Question.all()
          return response.status(200).send({
            data: question
          })
        } catch (error) {
          return response.status(400).send({
            message: 'bad request'
          })
        }
      }
}

module.exports = QuestionController
