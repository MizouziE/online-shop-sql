import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class ProductSeeder extends BaseSeeder {
  public async run () {
    await Product.createMany([
      {
        name: 'Something good',
        price: 100,
        description: 'Pretty, pretty good.',
        summary: 'It really is the best of the stuff on here, what can I say?'
      },
      {
        name: 'Something OK',
        price: 50,
        description: 'Pretty good.',
        summary: 'It is almost the best of the stuff on here. Not far off!'
      },
      {
        name: 'Something bad',
        price: 10,
        description: 'Pretty, pretty bad.',
        summary: 'It really is not good compared to the stuff on here, what can I say?'
      },
      {
        name: 'Something terrible',
        price: 2,
        description: 'Pretty, pretty goddamn awful.',
        summary: 'It really is the worst. Even worse than YOU. Ya tramp, why you even looking?'
      },
    ])
  }
}
