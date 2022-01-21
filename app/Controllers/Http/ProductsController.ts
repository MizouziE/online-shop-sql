import Product from 'App/Models/Product';
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductsController {
  public async show({ params, view }) {
    const product = await Product.find({ id : params.id });
    console.log(product)
    return view.render('products/index', { product });
  }
}
