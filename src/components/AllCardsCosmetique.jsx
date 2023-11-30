import OneCard from './OneCard.jsx'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useState } from 'react'
import prod1 from "../assets/products/productMakup/blush.jpg"
import prod2 from "../assets/products/productMakup/blushdior.jpg"
import prod3 from '../assets/products/productMakup/blushkaja.jpg'
import prod4 from '../assets/products/productMakup/fonddior.jpg'
import prod5 from '../assets/products/productMakup/fondyves.jpg'
import prod6 from '../assets/products/productMakup/fondfor.jpg'

import prod7 from '../assets/products/productMakup/chanel.jpg'
import prod8 from '../assets/products/productMakup/redchanel.jpg'
import prod9 from '../assets/products/productMakup/mac.jpg'
import Header from './Header.jsx'
import Footer from './Footer.jsx'


const products = [
  {
    id: 1,
    title: 'blush Dior peche ',
    img: prod1,
    price: 25.00 ,
    type: ' Dior',
    categorie: 'blush en poudre',
  },
  {
    id: 2,
    title: 'blush Dior rose',
    img: prod2,
    price: 25.00,
    type: 'DIOR ',
    categorie: 'blush en poudre rose',
  },
  {
    id: 3,
    title: "Fond de teint Yves Saint Laurent ",
    img: prod3,
    price: 30.00,
    type: 'Yves Saint Laurent ',
    categorie: 'blush en poudre',
  },
  {
    id: 4,
    title: ' Fond de teint Dior ',
    img: prod4,
    price: 139 ,
    type: 'MISS DIOR',
    categorie: 'Fond de teint',
  },
  {
    id: 5,
    title: 'FOND DE TEINT HYDRATANT ',
    img: prod6,
    price: 25.00,
    type: 'For ever ',
    categorie: 'Fond de teint ',
  },
  {
    id: 6,
    title: 'FOND DE TEINT MAT LUMINEUX',
    img: prod5,
    price: 82.50,
    type: 'yves saint laurent',
    categorie: 'Fond de teint',
  },
  {
    id: 7,
    title: 'Rouge à Lèvres CHANEL',
    img: prod7,
    price: 20 ,
     type: ' CHANEL ',
    categorie: 'Rouge à Lèvres CHANEL',
  },
  {
    id: 8,
    title: 'Rouge à Lèvres CHANEL',
  
    img: prod8,
    price: 20 ,
    type: ' CHANEL ',
    categorie: 'Rouge à Lèvres CHANEL',
  },

  { 
    id: 9,
    title: ' Rouge à Lèvres MAC',
    img: prod9,
    price:37 ,
    type: 'MAC ',

    categorie:  "Rouge à Lèvres MAC"
  },

]
export default function AllCardsCosmetique() {
  let tabCateg = []
  products.map((element) => {
    if (!tabCateg.includes(element.categorie))
      tabCateg = [...tabCateg, element.categorie]
  })

  //search
  const [search, setSearch] = useState('')
  const handlsearch = (event) => {
    setSearch(event.target.value)
  }

  //select
  const [categorie, setCategorie] = useState('All')
  const handlcategorie = (e) => {
    //  console.log(e.target.value);
    setCategorie(e.target.value)
  }

  return (
<div>
<Header/>
    
  
<nav >
<div class="container lime pullUp1">
  <a href="/">HOME</a>
  <link href="AllCardsCosmetiques.jsx" rel="stylesheet" />
  <a href="/ProduitsCosmetiques">Produits cosmetiques</a>
  <a href="/Parfums">Parfums</a>
  <a href="/Produitsdesoinsvisage">Produits de soins</a>
  <a href="/TousLesProduits">Tous Les Produits</a>

</div>
</nav>

<div class="d-flex justify-content-evenly">


      <select className="form-select" onClick={handlcategorie}>
        <option value="All">All</option>
        {tabCateg.map((categorie, id) => (
          <option key={id} value={categorie}>
            {categorie}
          </option>
        ))}
      </select>

      <Form className="d-flex" onChange={handlsearch}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>   
      
      
        </div>


      <Row> 
     
        {products 
          .filter((element) =>
            element.title.toLowerCase().includes(search.toLowerCase()),
          )
          .filter((ele) => ele.categorie === categorie || categorie === 'All')
          .map((product, index) => (
            <Col xs={6} md={4} lg={4} key={index}>
              <OneCard item={product} />
              
            </Col>             

          ))} 
      </Row> 
  
    
<Footer/>    </div>

  )
}
