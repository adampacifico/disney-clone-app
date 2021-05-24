import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Login from "./Components/Login";
import Header from "./Components/Header";
import Home from "./Components/Home/Home"
import Details from "./Components/Details"


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/home/details/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
