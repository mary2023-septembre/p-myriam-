import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Shopcard from './Shopcard'
import Button from 'react-bootstrap/Button'
import { deleteAllProduct } from '../../store/features/Cardlslice'

export default function Shopcardlist() {
  const productItems = useSelector((state) => state.card.local)

  const dispatch = useDispatch()
  return (
    <div>
      {productItems.map((el) => (
        <Shopcard item={el} />
      ))}
      <Button
        variant="danger"
        onClick={() => {
          dispatch(deleteAllProduct())
        }}
      >
        clear cart
      </Button>{' '}
        <a href="/TousLesProduits">Afficher tous les produit </a>
        
          
    
    </div>
  )
}
