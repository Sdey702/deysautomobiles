import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navber from "./Navber";
import { Switch, Route, Redirect} from "react-router-dom";



const App = () => {

    return (
      <>
        <Navber/>
        <Switch>
          <Route exact path="/" component={Home}/>  
          <Route exact path="/about" component={About}/>  
          <Route exact path="/services" component={Services}/>  
          <Route exact path="/contact" component={Contact}/>  
          
        </Switch>    
      </>
    );
};


export default App;