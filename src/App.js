import React from "react";
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Search from './components/Search'
import People from './components/People'
import Planet from './components/Planet'
import Starships from './components/Starships'

function App() {
  return (
    <BrowserRouter>
      <h1 className="App">Star Wars</h1>
      <Search />
      <Switch>
        <Route path="/people/:id">
          <People/>
        </Route>
        <Route path="/planets/:id">
          <Planet/>
        </Route>
        <Route path="/starships/:id">
          <Starships/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;