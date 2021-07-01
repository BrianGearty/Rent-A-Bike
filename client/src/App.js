
import React from "react";
import Amplify from "aws-amplify"
import config from './aws-exports'
// import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import Register from "./Pages/Register";
// import DataDisplay from "./Pages/DataDisplay";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Bike from "./Pages/Bikes";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

Amplify.configure(config)



function App() {
  return (
    <div className="App">
    <Router>
    <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            {/* <Route exact path="/datadisplay" component={DataDisplay} /> */}
            <Route exact path="/bike" component={Bike} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
    <Footer />
    </Router>
    
      </div>
  );
}



// export default withAuthenticator(App);
export default App;