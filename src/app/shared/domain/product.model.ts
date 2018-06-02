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
      id: undefined,
      description: undefined,
      price: undefined,
      idType: undefined,
      type: undefined
    }
  }
}


