import { defineStore } from 'pinia'


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface State {
  product: Product | null;
}

export const useProductStore = defineStore('product', {
  state: (): State => ({
    product: null,
  }),
  actions: {
    setProduct(product: Product) {
      this.product = product;
    },
  },
})
