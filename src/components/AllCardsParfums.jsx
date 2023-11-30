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

import prod2 from '../assets/products/baccarat.jpg'
import prod1 from '../assets/products/dolcegaban1.jpg'
import prod3 from '../assets/products/linterdit.jpg'
import prod4 from '../assets/products/missdior.jpg'
import prod6 from '../assets/products/myway.jpg'
import prod5 from '../assets/products/si.jpg'
import prod7 from '../assets/products/yves.jpg'
import prod8 from '../assets/products/coco.jpg'
import prod9 from '../assets/products/versage.jpg'
import Header from './Header.jsx'
import Footer from './Footer.jsx'


const products = [
  {
    id: 1,
    title: 'Baccarat Rouge ',
    img: prod1,
    price: 235.00 ,
    type: 'Maison Francis Kurkdjian Paris',
    categorie: 'Parfums',
  },
  {
    id: 2,
    title: 'Dolce Gabbana',
    img: prod2,
    price: 105 ,
    type: 'BLANCO DOLCE&GABBANA',
    categorie: 'Parfums',
  },
  {
    id: 3,
    title: "L'Interdit - Eau de Parfum ",
    img: prod3,
    price: 73.00,
    type: 'GIVENCHY ',
    categorie: 'Parfums',
  },
  {
    id: 4,
    title: ' BLOOMING BOUQUET',
    img: prod4,
    price: 139 ,
    type: 'MISS DIOR',
    categorie: 'Parfums',
  },
  {
    id: 6,
    title: 'My Way',
    img: prod5,
    price: 108.00,
    type: 'ARMANI',
    categorie: 'Parfums',
  },
  {
    id: 5,
    title: 'SI - Eau de Parfum',
    img: prod6,
    price: 82.50,
    type: 'ARMANI',
    categorie: 'Parfums',
  },
  {
    id: 7,
    title: ' YVES SAINT LAURENT libre',
    img: prod7,
    price: 45,
    type: 'PARFUM FEMME YVES SAINT LAURENT',
    categorie: 'Parfums',
  },
  {
    id: 8,
    title: 'coco chanel',
    img: prod8,
    price: 100,
    type: ' Parfums CHANEL ',
    categorie: 'Parfums',
  },
  { 
    id: 9,
    title: 'Eau de toilette Bright Crystal Versace ',

    img: prod9,
    price:37 ,
    type: 'Versace ',

    categorie:  "Parfums"
  },

]
export default function AllCardsParfums() {
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
    <Container>
          <Header/>
          <nav >
<div class="container lime pullUp1">
  <a href="/">HOME</a>
  <link href="AllCardsCosmetiques.jsx" rel="stylesheet" />
  {/* <a href="/ProduitsCosmetiques">Produits cosmetiques</a> */}
  {/* <a href="/Parfums">Parfums</a> */}
  <a href="/Produitsdesoinsvisage">Produits de soins</a>
  <a href="/TousLesProduits">Tous Les Produits</a>

</div>
</nav>
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
    
      <Footer/>  
    </Container>
    
  )
}
