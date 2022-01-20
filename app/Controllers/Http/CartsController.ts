// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cart from "App/Models/Cart"

export default class CartsController {
  public async show({ view }) {
    const cart = await Cart.find(1)
    return view.render('carts/index', { cart })
  }
}
