export interface ProductModel {
  id: number,
  description: string,
  price: number,
  idType: number,
  type: string
}

export class Product {
  model: ProductModel;

  constructor() {
    this.model = {
      id: -1,
      description: '',
      price: 0,
      idType: 0,
      type: ''
    }
  }
}


