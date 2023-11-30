import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  local: localStorage.getItem('item')
    ? JSON.parse(localStorage.getItem('item'))
    : [],
  prixtotal: 0,
  quantite: 0,
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCart: (state, action) => {
      let cartIndex = state.local.findIndex(
        (item) => item.id === action.payload.id,
      )

      if (cartIndex >= 0) {
        state.local[cartIndex].quantite += 1
      } else {
        let tempProduct = { ...action.payload, quantite: 1 }
        state.local.push(tempProduct)
      }
      /**Positioning toast */

      toast.success('Success Notification !', {
        position: toast.POSITION.BOTTOM_LEFT,
      })

      localStorage.setItem('item', JSON.stringify(state.local))
    },

    

    moinsOneProductShop: (state, action) => {
      let cartIndex = state.local.findIndex(
        (item) => item.id === action.payload.id,
      )

      if (cartIndex >= 0) {
        state.local[cartIndex].quantite -= 1 
      } 
    if (state.local[cartIndex].quantite < 1) {
    
      state.local.splice(cartIndex, 1)
      localStorage.setItem('item', JSON.stringify(state.local))
      }},

    deleteOneproduct: (state, action) => {
      let cartIndex = state.local.findIndex(
        (item) => item.id === action.payload.id,
      )
      state.local.splice(cartIndex, 1)
      localStorage.setItem('item', JSON.stringify(state.local))

      toast.error('delete succes !', {
        position: toast.POSITION.BOTTOM_LEFT,
      })

      return state
    },

    deleteAllProduct: (state) => {
     state.local = []

      console.log(state.local);
       toast.error('delete succes !', {
        position: toast.POSITION.BOTTOM_LEFT,
      })
      localStorage.setItem('item', JSON.stringify(state.local))
     return state

    },
  },
})
export const {
  addCart,
  plusPrice,
  moinsOneProductShop,
  deleteOneproduct,
  deleteAllProduct,
} = cardSlice.actions

export default cardSlice.reducer
