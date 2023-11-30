
import { Card, Col, Container, Row } from 'react-bootstrap';
import image1 from '../assets/products/home/image1.jpg'
import image2 from '../assets/products/home/image2.jpg'
import image3 from '../assets/products/home/image3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDBBtn } from 'mdb-react-ui-kit';
import Home2 from './Home2';
import Carousel1 from './Carousel1';

function HomeMain() {
  return (
   
<article>

<div>

<span id="h1"> Beauty store 
 </span> 
<Carousel1/>
<Row>
  <p className='p3'>Profitez de vos achats en ligne dans la boutique Beauty store .
    

</p>
</Row> 
<Row>
<Col> 
<Card style={{ width: '20rem' }}>
      <Card.Body> 
      <div className='avantage1'> 
      <i class="fa-solid fa-truck"></i>

<p className='p2'>
<span>Livraison gratuite à partir de 99€*</span>  



Pour toute commande supérieure à 99,00€, JANSSEN COSMETICS prend en charge tous les frais d'expédition et d'emballage pour vous.</p>
</div> 
<div className='orange1'>
         </div>
      </Card.Body>
    </Card>

</Col>

<Col>
<Card style={{ width: '20rem' }}>
      <Card.Body> 
      <div className='avantage1'> 
      <i class="fa-solid fa-gift"></i>

      <p className='p2'> 
      
      <span>Echantillons gratuits pour chaque commande</span>

En guise de remerciement, vous recevrez GRATUITEMENT des échantillons de produits attrayants avec chaque commande!


</p>
</div> 
<div className='orange1'>
         </div>
      </Card.Body>
    </Card>
 </Col>
 <Col>
<Card style={{ width: '20rem' }}>
      <Card.Body> 
      <div className='avantage1'> 
      <i class="fa-solid fa-hand-holding-heart"></i>

      <p className='p2'><span>
POINTS FIDÉLITÉ</span>
Bénéficiez de promotions exceptionnelles grâce à vos points fidélité.


</p>
</div> 
<div className='orange1'>
         </div>
      </Card.Body>
    </Card>
 </Col>
 <Col>
<Card style={{ width: '20rem' }}>
      <Card.Body> 
      <div className='avantage1'> 
      <i class="fa-sharp fa-solid fa-circle-dollar-to-slot"></i>

      <p className='p2'>
        <span>
PARRAINAGE : </span>
Gagnez un bon de réduction
de 5 euros par filleul.


</p> 
</div> 
<div className='orange1'>
         </div>
      </Card.Body>
    </Card>
 </Col>
</Row>

 </div>
      </article>
  );
}

export default HomeMain;