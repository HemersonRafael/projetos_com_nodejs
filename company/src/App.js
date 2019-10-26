import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Rodape from './components/Rodape'
import Cabecalho from './components/Cabecalho'
import Inicio from './components/Inicio'
import Servicos from'./components/Servicos'
import Portfolio from './components/Portfolio'
import Precos from './components/Precos'
import Contatos from './components/Contatos'
import Admin from './components/admin/Admin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho/>
          <Route path='/' exact component={Inicio}/>
          <Route path='/servicos' component={Servicos}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/precos' component={Precos}/>
          <Route path='/contatos' component={Contatos}/>
          <Route path='/admin' component={Admin}/>
          <Rodape/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
