const Product = require('./model/product')

class FakeDb {
    constructor(){
        this.products = [
            {
              coverImage: './assets/img/phone-cover.jpg',
              name: 'Phone XL',
              price: 799,
              description: 'A large phone with one of the best screens',
              heding1: 'Phone XL heding1',
              heding2: 'Phone XL heding2',
              heding3: 'Phone XL heding3',
              hedingtext1:'テキスト１　テキスト１　テキスト１　テキスト１　テキスト１　',
              hedingtext2:'テキスト２　テキスト２　テキスト２　テキスト２　テキスト２　',
              hedingtext3:'テキスト３　テキスト３　テキスト３　テキスト３　テキスト３　'
            },
            {
              coverImage: './assets/img/phone-cover.jpg',
              name: 'Phone Mini',
              price: 699,
              description: 'A great phone with one of the best cameras',
              heding1: 'Phone Mini heding1',
              heding2: 'Phone Mini heding2',
              heding3: 'Phone Mini heding3',
              hedingtext1:'テキスト１　テキスト１　テキスト１　テキスト１　テキスト１　',
              hedingtext2:'テキスト２　テキスト２　テキスト２　テキスト２　テキスト２　',
              hedingtext3:'テキスト３　テキスト３　テキスト３　テキスト３　テキスト３　'
            },
            {
              coverImage: './assets/img/phone-cover.jpg',
              name: 'Phone Standard',
              price: 299,
              description: '',
              heding1: 'Phone Standard',
              heding2: 'Phone Standard',
              heding3: 'Phone Standard',
              hedingtext1:'テキスト１　テキスト１　テキスト１　テキスト１　テキスト１　',
              hedingtext2:'テキスト２　テキスト２　テキスト２　テキスト２　テキスト２　',
              hedingtext3:'テキスト３　テキスト３　テキスト３　テキスト３　テキスト３　'
            },
            {
              coverImage: './assets/img/phone-cover.jpg',
              name: 'Phone XXL',
              price: 1000,
              description: 'All Big!',
              heding1: 'Phone XXL heding1',
              heding2: 'Phone XXL heding2',
              heding3: 'Phone XXL heding3',
              hedingtext1:'テキスト１　テキスト１　テキスト１　テキスト１　テキスト１　',
              hedingtext2:'テキスト２　テキスト２　テキスト２　テキスト２　テキスト２　',
              hedingtext3:'テキスト３　テキスト３　テキスト３　テキスト３　テキスト３　'
            }
          ];
    }

    async initDb(){
      await this.cleanDb()
      this.pushProductsToDB()
    }

    async cleanDb(){
      await Product.deleteMany({})
    }

    pushProductsToDB(){
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb(){
        this.pushProductsToDB()
    }
}

module.exports = FakeDb