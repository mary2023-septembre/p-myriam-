import Container from 'react-bootstrap/Container'
import React from 'react' 
import Stack from 'react-bootstrap/Stack';

import { Card } from 'react-bootstrap'
import {
  addCart,
  moinsOneProductShop,
 
  deleteOneproduct
} from '../../store/features/Cardlslice'

import { useDispatch } from 'react-redux'

export default function Shopcard(props) {
  // const quant = useSelector((state) => state.local(quantite))

  const dispatch = useDispatch()
  return (
    <Container>
      <div >
        <Card style={{ width: '20rem' , height: '38rem' }}className='type-categorie1'  
         >
          <Card.Img
            variant="top"
            src={props.item.img}
            style={{ width: '9rem', textAlign:"center" }}
          /> 
          
          <Card.Body>
            <Card.Title style={{ fontSize: '1rem' }}>
             
              <br/>    <div className="title" > 
 <h4>nom du produit</h4> </div> 
              {props.item.title}   <br/><h4>Type du produit</h4>
              {props.item.type}   <br/>
              <h4>Categorie du produit</h4>
              {props.item.categorie}   <br/>


              <h4>Quantite: </h4>
              {props.item.quantite}   <br/>

           <h4>Prix d'un article: </h4>
            {props.item.price} $<br/> 
            
            <h4>Prix Total: </h4>
              {props.item.price * props.item.quantite}
              $ 
     
           
           
       
              <Stack direction="horizontal" gap={3}>
      <div className="p-2">
      <div className='i'>
            
            <i class="fas fa-trash-alt" 
            onClick={() => {
              dispatch(deleteOneproduct(props.item))
            }}
            
  
            ></i> 
            </div>



      </div>




      <div className="p-1">


      <div className='i'>

              
<i class="fas fa-plus" 


  onClick={() => {
    dispatch(addCart(props.item))
  }}



></i>
</div>

      </div>
      <div className="p-2">


      <div className='i'> 
        <i class="fas fa-minus" 
                              onClick={() => {
                                dispatch(moinsOneProductShop(props.item))
                              }}

              ></i>
             
              </div>





      </div>

    </Stack>
            
               
               </Card.Title>

          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}
