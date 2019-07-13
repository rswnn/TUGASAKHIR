'use strict'

const User = use('App/Models/User')

class AuthController {
    async register({request, response}) {
        const {name,email, phone} = request.only([
          'name',
          'email',
          'phone'
        ])
    
        const user = await User.create({
          name,
          email,
          phone
        })
    
    
        return response.status(200).send({message: "Register Success", data:user})
      }
    
}

module.exports = AuthController
