import Product from 'App/Models/Product';
import Application from '@ioc:Adonis/Core/Application'
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductsController {
  public async show({ params, view }) {
    const product = await Product.findByOrFail('id', params.id)
    return view.render('products/details', { product })
  }

  public async index({ view }) {
    const products = await Product.all()
    return view.render('products/index', { products })
  }

  public async input({ view }) {
    return view.render('products/create')
  }

  public async inputEdit({ params, view }) {
    const product = await Product.findBy('id', params.id)

    return view.render('products/edit', { product })
  }

  public async create({ request, response }) {
    const newProduct = request.only(['name', 'price', 'description', 'summary'])
    const product = new Product()

    const image = request.file('image')

    if (image) {
      await image.move(Application.tmpPath('uploads/products'))
    }

        product.name = newProduct.name
        product.price = newProduct.price
        product.description = newProduct.description
        product.summary = newProduct.summary
        product.imagePath = image.filePath

    await product.save()
    // console.log(image)
    response.redirect('/products')
  }

  public async edit({ request, response }) {
    const editedProduct = request.only(['name', 'price', 'description', 'summary'])
    const id = request.only(['id'])
    const product = await Product.findOrFail(id.id)

    product.name = editedProduct.name
    product.price = editedProduct.price
    product.description = editedProduct.description
    product.summary = editedProduct.summary

    await product.save()
    console.log(product.$isPersisted)
    response.redirect('/products')
  }
}
