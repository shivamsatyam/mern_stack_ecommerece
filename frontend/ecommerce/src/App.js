import React from "react"
import {Switch,Route} from "react-router-dom"
import Contact from "./screens/Contact"
import Home from "./screens/Home"
import Search from "./screens/Search"

function App() {
  return (
    <Switch>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/login" component={Contact}/>
      <Route path="/" component={Home}/>
    
    </Switch>
  );
}

export default App;
