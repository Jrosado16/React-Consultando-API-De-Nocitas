import React, { Component, Fragment } from 'react';
import './App.css';
import Pagina from './containers/Pagina';

// App JS debe de estar limpio, solo se usa para Routes, Wraps y componentes globales
class App extends Component {  
  render(){
    return(
      <Fragment>
        <Pagina />
      </Fragment>
    )
  }
}

export default App;
