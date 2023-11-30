import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useSelector } from 'react-redux'
import OneCard from './OneCard';
import Shopcard from './menuleft/Shopcard';




function Cart() {
  const productItems = useSelector((state) => state.card.local);

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (

  <div>
    <i className="fa-thin1 fa-sun" onClick={handleShow}></i>
      <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>

      {

productItems.map((el) => {
  
      <Shopcard
          key={el.id}
          item={el}
      />
  
})
      }
    </Offcanvas.Body>
    </Offcanvas>
  </div>  
  )
}

export default Cart

