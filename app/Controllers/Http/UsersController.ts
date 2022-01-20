// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";

export default class UsersController {
  public async show({ view }) {
    const user = await User.find(1);
    return view.render('users/index', { user });
  }
}
