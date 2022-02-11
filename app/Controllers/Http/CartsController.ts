// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from "App/Models/Product"
import Cart from "App/Models/Cart"

export default class CartsController {
  public async show({ view, params }) {
    const cart = await Cart.findByOrFail('id', params.id)



    return view.render('carts/index', { cart })
  }

  public async add({ request }) {
    const prodId = request.only(['item'])
    const product = await Product.findByOrFail('id', prodId.item)
    const cart = await Cart.findByOrFail('id', 1)
    const itemList = JSON.stringify(cart.items)

    cart.items = 

    await cart.save()

    console.log(product)
    console.log(itemList)
  }
}
