import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Shopcardlist from './menuleft/shopcardlist'
import Badge from 'react-bootstrap/Badge';
import HeaderH from './HeaderH'


export default function Header(props) { 

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return ( 

<div className='header'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Products Of Cosmetique</Navbar.Brand>

     <i className="fa-solid fa-cart-shopping"
      style={{ fontSize: '2rem' , color :"white"}}  
      onClick={handleShow}>

       <Badge bg="secondary" 
        style={{ fontSize: '20px' , color :"red"}}>
     {/* {props.item.quantite} */}
       </Badge>
      </i>   



          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Shopcardlist />
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
      </div>
  )
}
