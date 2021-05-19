import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './routes/Home';
import Header from './components/Header';
import CardDetail from './routes/CardDetail';
import Login from './routes/Login';
import Register from './routes/Register';

function App() {
  return (
    <div className="app">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" exact={true} component={Home}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/card/:cardId" component={CardDetail} />

      </Switch>
    </Router>
    </div>
  )
}

export default App;