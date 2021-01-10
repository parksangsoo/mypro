import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import CardDetail from './routes/CardDetail';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/card-detail" component={CardDetail} />
    </HashRouter>
  )
}

export default App;