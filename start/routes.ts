/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('products/:id', 'ProductsController.show')
Route.get('products', 'ProductsController.index')
Route.get('users/:id', 'UsersController.show')
Route.post('users/signup', 'UsersController.store')
Route.get('orders/:id', 'OrdersController.show')
Route.get('carts/:id', 'CartsController.show')

Route.get('login', 'AuthController.index')
Route.post('login', 'AuthController.login')
Route.get('signup', 'AuthController.signup')
