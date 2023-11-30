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
import prod1 from "../assets/products/productssoins/1.jpg"
import prod2 from "../assets/products/productssoins/2.jpg"
import prod3 from "../assets/products/productssoins/3.jpg"
import prod4 from "../assets/products/productssoins/4.jpg"
import prod5 from "../assets/products/productssoins/5.jpg"
import prod6 from "../assets/products/productssoins/6.jpg"

import prod7 from "../assets/products/productssoins/cera1.jpg"
import prod8 from "../assets/products/productssoins/cera2.jpg"
import prod9 from "../assets/products/productssoins/efaclar.jpg"
import Header from './Header.jsx'
import Footer from './Footer.jsx'



const products = [
  {
    id: 1,
    title: "L'OREAL PARIS MASQUE PURIFIANT",
    img: prod1,
    price: 3.50 ,
    type: "L'OREAL PARIS",
    categorie: 'masque purifiant ',
  },
  {
    id: 2,
    title: 'Crème Masque Nuit Triple',
    img: prod2,
    price: 12.97 ,
    type: "L'Oréal Paris ",
    categorie: 'Crème Masque',
  },
  {
    id: 3,
    title: "CERAVE BAUME HYDRATANT 454 ML",
    img: prod3,
    price: 20.00,
    type: 'CERAVE ',
    categorie: 'Soin hydratant',
  },
  {
    id: 4,
    title: 'the ordinary glycolic acid 7 toning solution ',
    img: prod4,
    price: 39 ,
    type: 'Glycolic Acid 7% Exfoliating Toner',
    categorie: 'serum pour visage',
  },
  {
    id: 5,
    title: 'Sérum Capillaire Multi-Peptides Densifiant',
    img: prod6,
    price: 25.00,
    type: 'Sérum Capillaire  ',
    categorie: ' The Ordinary',
  },
  {
    id: 6,
    title: 'THE ORDINARY Solution De Peeling AHA 30% + BHA 2% Solution De Peeling',
    img: prod5,
    price: 82.50,
    type: 'THE ORDINARY Solution De Peeling',
    categorie: 'THE ORDINARY',
  },
  {
    id: 7,
    title: 'Daily Moisturizing Lotion    ',
    img: prod7,
    price: 20 ,
     type: ' Oil-free moisturizer with hyaluronic acid     ',
    categorie: 'THE ORDINARY   ',
  },
  {
    id: 8,
    title: 'EFFACLAR DUO (+) UNIFIANT',
  
    img: prod8,
    price: 20 ,
    type: ' cerave ',
    categorie: 'Foaming gel cleanser for normal to oily skin',
  },

  { 
    id: 9,
    title: 'Effaclar  Foaming Facial Cleanser',
    img: prod9,
    price:37 ,
    type: 'CORRECTEUR UNIFIANT ANTI-IMPERFECTIONS',

    categorie:  "la roche posay  "
  },

]
export default function AllCardsSoins() {
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
  <a href="/ProduitsCosmetiques">Produits cosmetiques</a>
  <a href="/Parfums">Parfums</a>
  {/* <a href="/Produitsdesoinsvisage">Produits de soins</a> */}
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
