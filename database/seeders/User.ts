import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        name: 'User Boozer',
        email: 'Boozy@hughsey.io',
        password: 'password',
        address: '123 West Road, Shepperd Bush, W3',
        isAdmin: false
      },
      {
        name: 'User Loser',
        email: 'Never@win.evr',
        password: 'password',
        address: '00 Nowhere Ave, The Ends, UB4',
        isAdmin: false
      },{
        name: 'User Cruiser',
        email: 'Knight@cruiser.kit',
        password: 'password',
        address: '1980 Ithink So, The past, TV0',
        isAdmin: false
      },{
        name: 'User Muser',
        email: 'Plugin@baby.cme',
        password: 'password',
        address: 'Super Massive, Black-hole, 0UTR 5P4C3',
        isAdmin: false
      },
    ])
  }
}
