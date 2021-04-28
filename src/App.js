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
    <div classNmae="app">
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/card-detail" component={CardDetail} />
      </Switch>
    </Router>
    </div>
  )
}

export default App;