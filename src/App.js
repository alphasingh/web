
import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import {Route, Switch, Link, BrowserRouter} from "react-router-dom";
import Buyer from './Components/BuyerInfo';
import Plans from './Components/Plans';
import SellerLogin from './Components/ValidatedLoginForm';



function App() {
  return (

     <React.Fragment>
       <BrowserRouter>
        <div> 
          <Header/>
            
              <Switch>
                   <Route exact path="/" component={Content}/>
                   <Route exact path='/gallery' component={Gallery}/>
                   <Route path="/buyerinfo" component={Buyer}/>
                   <Route path="/plans" component={Plans}/>
                   <Route path="/sellerlogin" component={SellerLogin}/>

              </Switch>
          <Footer/>
        </div>
       </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
