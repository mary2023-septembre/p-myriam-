import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../store/features/Cardlslice'

function OneCard(props) {
const dispatch = useDispatch()

  return (
    <Container>


        <Card style={{ width: '22rem' }}>
        <div className="cont">
          <Card.Img variant="top" src={props.item.img}  />
          <Card.Body  >
            <Card.Text className='Cardtext'> 
              <p className='title'>  

                <span class="underlined underline-clip"> {props.item.title}
</span>

                </p>
<p>

</p>
<p className='type-categorie'>
 type : {props.item.type}        
      <br/>      
          
             Catégorie :
              {props.item.categorie}  
              <br/>
              Price : 
              {props.item.price} $

</p>
              <div className="overlay"   
              onClick={() => {
                dispatch(addCart(props.item))
                
              }}
 >Add to card </div>
            </Card.Text>
          </Card.Body>
          </div>

        </Card>

    </Container>
  )
}

export default OneCard
