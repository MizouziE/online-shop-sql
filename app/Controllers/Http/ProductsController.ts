import Product from 'App/Models/Product';
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductsController {
  public async show({ params, view }) {
    const product = await Product.findBy('id', params.id)
    return view.render('products/details', { product })
  }

  public async index({ view }) {
    const products = await Product.all()
    return view.render('products/index', { products })
  }

  public async input({ view }) {
    return view.render('products/create')
  }

  public async create({ request, response }) {
    const newProduct = request.only(['name', 'price', 'description', 'summary'])
    const product = new Product()

    product.name = newProduct.name
    product.price = newProduct.price
    product.description = newProduct.description
    product.summary = newProduct.summary

    await product.save()
    console.log(product.$isPersisted)
    response.redirect('/products')
  }
}
