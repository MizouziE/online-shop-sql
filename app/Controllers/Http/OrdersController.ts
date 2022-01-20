// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Order from "App/Models/Order"

export default class OrdersController {
  public async show({ view }) {
    const order = await Order.find(1)
    return view.render('orders/index', { order })
  }
}
