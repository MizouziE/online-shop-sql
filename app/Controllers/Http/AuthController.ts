// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'



export default class AuthController {
  public async login({ request, auth, response }) {
    const email = request.input('email')
    const hashedPassword = await Hash.make(request.input('password'))

    await auth
      .use('web') // 👈 using sessions guard
      .attempt(email, hashedPassword)

    response.redirect('users/:id')
  }

  public async index({ view }) {
    return view.render('login/index')
  }
}
