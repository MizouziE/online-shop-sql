import Product from 'App/Models/Product';
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductsController {
  public async show({ view }) {
    const product = await Product.find(1);
    return view.render('products/index', { product });
  }
}
