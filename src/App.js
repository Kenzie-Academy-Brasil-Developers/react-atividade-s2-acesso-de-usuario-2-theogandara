import Home from "./components/Home";
import Costumer from "./Pages/Costumer";
import Company from "./Pages/Company";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import members from "./dados";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Switch>
          <Route exact path="/">
            <Home members={members} />
          </Route>
          <Route exact path="/costumer/:id">
            <Costumer members={members}/>
          </Route>
          <Route exact path="/company/:id">
            <Company members={members}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
