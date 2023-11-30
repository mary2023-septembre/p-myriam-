import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

      

        <section className='mb-4'>
       
        <p className='pfooter'>
            Beauty store  est une parfumerie en ligne tunisienne qui propose une large gamme de produits de santé, de bien-être et de beauté.
Le site propose un large choix de produits cosmetique, de produits de soins,de produits pour femme.
            </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h4 className='text-uppercase'>Link 1</h4>

              <ul className='list-unstyled mb-0'>
                <li>
                <a href="/Parfums"> 
Parfums                  </a>
                </li>
               
               
               
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h4 className='text-uppercase'>Link 2</h4>

              <ul className='list-unstyled mb-0'>
                <li>
                <a href="/Produitsdesoinsvisage"> 
Produits de soins                   </a>
                </li>

              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h4 className='text-uppercase'>Link 3</h4>

              <ul className='list-unstyled mb-0'>
                <li>    
                <a href="/ProduitsCosmetiques"> 
                Prduits cosmetiques
                  </a>
                </li>
                
              
              
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h4 className='text-uppercase'>Link 4</h4>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='TousLesProduits'>
                     liste des achats 
                  </a>
                </li>
              
              
              
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

     
    </MDBFooter>
  );
}