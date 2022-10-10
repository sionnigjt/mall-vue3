
import { defineStore } from 'pinia'
import {getCart} from '../server/Cart'
export const useCounterStore = defineStore('main', {
  state:()=>({
    CartCount:0
  }),
  actions: {
    async UpdateCartCount(){
      let {data}=  await getCart()
      this.CartCount=data?data.length:0
    }
  }
})
