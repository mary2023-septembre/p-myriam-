import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderH() {
  return (
    <>
     <nav >
<div class="container lime pullUp1">
  <a href="/">HOME</a>
  <link href="AllCardsCosmetiques.jsx" rel="stylesheet" />
  <a href="/ProduitsCosmetiques">Produits cosmetiques</a>
  <a href="/Parfums">Parfums</a>
  <a href="/Produitsdesoinsvisage">Produits de soins</a>
  <a href="/TousLesProduits">Tous Les Produits</a>

</div>
</nav>
      
    </>
  );
}

export default HeaderH;