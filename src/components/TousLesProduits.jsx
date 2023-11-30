import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShopcardProduit from './ShopcardProduits'

export default function TousLesProduits() {
  const productItems = useSelector((state) => state.card.local)

  const dispatch = useDispatch()
  return (
    <div>
        <nav >
<div class="container lime pullUp1">
  <a href="/">HOME</a>
  <link href="AllCardsCosmetiques.jsx" rel="stylesheet" />
  <a href="/ProduitsCosmetiques">Produits cosmetiques</a>
  <a href="/Parfums">Parfums</a>
  <a href="/Produitsdesoinsvisage">Produits de soins</a>
  {/* <a href="/TousLesProduits">Tous Les Produits</a> */}

</div>
</nav> 
      {productItems.map((el) => (
        <ShopcardProduit item={el} />
      ))}
      
       
    </div>
  )
}
