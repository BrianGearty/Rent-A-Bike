
import React from "react";
// import Amplify from "aws-amplify"
// import config from './aws-exports'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Bike from "./Pages/Bikes";
import Payment from "./Components/payment"

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
require('dotenv').config();

// Amplify.configure(config)


function App() {
  return (
    <div className="App">
    <Router>
    <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/bike" component={Bike} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/payment/:total" component={Payment} />
          </Switch>
    <Footer />
    </Router>
    {/* <AmplifySignOut /> */}
      </div>
  );
}



// export default withAuthenticator(App);
export default App;