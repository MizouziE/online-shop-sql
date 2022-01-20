// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";
import SignupUser from "App/Validators/SignupUserValidator";

export default class UsersController {
  public async show({ view }) {
    const user = await User.find(1);
    return view.render('users/index', { user });
  }

  public async store({ request }) {
    const user = await request.validate(SignupUser)
    console.log(user.title)
    console.log(user.description)
  }
}
