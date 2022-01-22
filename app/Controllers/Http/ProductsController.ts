import Product from 'App/Models/Product';
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductsController {
  public async show({ params, view }) {
    const product = await Product.findBy('id', params.id);
    return view.render('products/details', { product });
  }
}
