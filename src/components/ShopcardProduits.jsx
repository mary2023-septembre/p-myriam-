import Container from 'react-bootstrap/Container'
import React from 'react'
import { Card } from 'react-bootstrap'


import { useDispatch } from 'react-redux'

export default function ShopcardProduit(props) {
  // const quant = useSelector((state) => state.local(quantite))

  const dispatch = useDispatch()
  return (


<Container>

<table>
      
        <thead>
          <tr>
            <th colspan="3">la liste des produits </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nom du Produits</td>
            <td>      {props.item.title}</td>
          </tr>
          <tr>
            <td>Type du produit</td>
            <td> {props.item.type}</td>
          </tr>
          <tr>
            <td>categorie</td>
            <td>{props.item.categorie}
</td>
          </tr>
          <tr>
            <td>Qunatite</td>
            <td>{props.item.quantite} 
</td>

          </tr>
          <tr>
            <td>Nom du Produits</td>
          </tr>
        </tbody>
      </table>















       {/* <div className="cont1">
         <Card style={{ width: '20rem' }}>
          <Card.Img
            variant="top"
            src={props.item.img}
            style={{ width: '9rem' }}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: '1rem' }}>
              
              {props.item.title}
              {props.item.type}

              {props.item.categorie}
            </Card.Title>
            <Card.Text>
            <h3>Price :</h3>

              {props.item.price * props.item.quantite}
              <br/>
             <h3>Quantite :</h3>
              {props.item.quantite}
             
              
            </Card.Text>
          </Card.Body>
        </Card>
      </div> */}
    </Container> 
  )
}