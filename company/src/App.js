import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Rodape from './componente/Rodape'
import Cabecalho from './componente/Cabecalho'
import Inicio from './componente/Inicio'
import Servicos from'./componente/Servicos'
import Portfolio from './componente/Portfolio'
import Precos from './componente/Precos'
import Contatos from './componente/Contatos'
import Admin from './componente/admin/Admin';

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
