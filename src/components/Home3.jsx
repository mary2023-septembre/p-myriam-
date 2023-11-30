
import { Col, Container, Row } from 'react-bootstrap';
import image1 from "../assets/products/home/parfums.jpg" 

// import image2 from "../assets/sans icons/si.png" 
// import image3 from "../assets/sans icons/si.png" 


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MDBBtn } from 'mdb-react-ui-kit';

function Home3() {
  return (
    <div className='section2'>
    
      <Row className="m-5" > 
      <Col>      
      

        <Card className="card1" style={{ width: '22rem' , height:"30rem" }}>
      
      <Card.Body>

        <Card.Title> 
        <i class="fa-brands  fa-pagelines"></i>
           <h3>Parfums </h3>
        
        <p className="m-3">
        “Le souvenir est le parfum de l'âme.” 

        </p>
        <h5>Nos Parfums   <a href="/Parfums"> <i class="fas fa-arrow-alt-circle-right"></i></a> </h5>
        </Card.Title>
     
   
      </Card.Body>
    </Card>


</Col>

<Col>      
        <Card className="card2" style={{ width: '22rem' , height:"30rem" }}>
      
      <Card.Body>

        <Card.Title>  
        <i class="fa-brands  fa-pagelines"></i>

           <h3>Produits cosmetiques  </h3>
        
        <p className="m-3">
        « Prends soin de ta peau, elle te le rendra bien. »


        </p>
        <h5>Nos Produits <a href="/ProduitsCosmetiques"> <i class="fas fa-arrow-alt-circle-right"></i></a></h5>
        
        </Card.Title>
     
   
      </Card.Body>
    </Card>


</Col>

<Col>      
        <Card className="card3" style={{ width: '22rem' , height:"30rem" }}>
      
      <Card.Body>

        <Card.Title> 
        <i class="fa-brands  fa-pagelines"></i>

           <h3>  Soins  </h3>
        
        <p className="m-3">
        Prends soin de toi car tu es un être précieux !
        </p>
        <h5>Nos Produits de soin <a href="/Produitsdesoinsvisage"><i class="fas fa-arrow-alt-circle-right"></i></a> </h5>
        </Card.Title>
     
   
      </Card.Body>
    </Card>


</Col>


      </Row>

          </div>
    
    
  );
}

export default Home3;