import React, { Component } from 'react';

import Site from './Site'
import Rodape from './componente/Rodape';
import Cabecalho from './componente/Cabecalho';
import Inicio from './componente/Inicio';
import Servicos from'./componente/Servicos'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho/>
        <Inicio/>
        <Servicos/>
        <Site/>
        <Rodape/>
      </div>
    );
  }
}

export default App;
