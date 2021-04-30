import "./App.css";
import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import {useStateValue} from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();
  
  return (
    <div className="app">
      {/* <h1>Lets build whatsapp clone</h1> */}
      {!user ? (
        <Login/>
      ): 
      (<div className="app__body">
        <Router>
        <Sidebar />
        <Switch>
        {/* Sidebar */}
      <Route path="/rooms/:roomId">
        {/* chat component */}
        <Chat />
      </Route>

      </Switch>
      </Router>
      </div>)
      }
    </div>
  );
}

export default App;
