import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import LogoPortifolio from './pages/PoritfolioLogo.jsx';
import CamisaPortifolio from './pages/PortifolioCamisa.jsx';
import Contato from './pages/Contato.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/portifoliologo' component={LogoPortifolio} exact/>
        <Route path='/portifoliocamisa' component={CamisaPortifolio} exact/>
        <Route path='/contato' component={Contato} exact/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

