// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";
import SignupUser from "App/Validators/SignupUserValidator";

export default class UsersController {
  public async show({ params, view }) {
    const user = await User.findBy('id', params.id);
    return view.render('users/index', { user });
  }

  public async signup({ request, response }) {
    const user = await request.validate(SignupUser)
    console.log(user.name)
    console.log(user.email)
    response.render('user/index', { user })
  }
}
