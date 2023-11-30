import './App.css'
import AllCardsCosmetique from "./components/AllCardsCosmetique"
import AllCardsParfums from './components/AllCardsParfums'
import AllCardsSoins from "./components/AllCardsSoins"
import './App.css'

import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import Home from './components/home'
import TousLesProduits from './components/TousLesProduits'

function App() {

  return (
<Router>
<Routes>
<Route exact path="/" element ={< Home/>} />
<Route exact path="/ProduitsCosmetiques" element ={ <AllCardsCosmetique/>} />
<Route exact path="/Parfums" element ={ <AllCardsParfums/>} />
<Route exact path="/Produitsdesoinsvisage" element ={ <AllCardsSoins/>} />

<Route exact path="/TousLesProduits" element ={ <TousLesProduits/>} />

</Routes>

</Router>


  );
}

export default App
