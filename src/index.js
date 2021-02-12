import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Portifolio from './pages/Poritfolio.jsx';
import Contato from './pages/Contato.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/portifolio' component={Portifolio} exact/>
        <Route path='/contato' component={Contato} exact/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

