import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Header from './components/Header';
import CardDetail from './routes/CardDetail';

function App() {
  return (
    <HashRouter>
      <Header />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/card-detail" component={CardDetail} />
    </HashRouter>
  )
}

export default App;