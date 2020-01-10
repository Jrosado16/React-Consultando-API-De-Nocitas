import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import ListaNoticas from './components/ListaNoticas';
import Formulario from './components/Formulario';

class App extends Component {

  state = {
    noticias: []
  }

  componentDidMount(){
    this.buscarNoticias();
  }

  //Consultamos la api y definimos un pais y un tipo de noticia por defecto
  buscarNoticias = (pais = 'ar', tipoNoticia = 'general' ) =>{
    //Ingresa una api_key valida aqui
    const API_KEY = 'API';
    const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${tipoNoticia}&apiKey=${API_KEY}`;

    //Hacemos el llamado a la api mediante fetch
    fetch(url, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      //Verificacmos que la respuesta sea correcta y que tengamos una API_KEY
      if(data.status === "ok" && API_KEY){
        this.setState({
          noticias: data.articles
        })
      }else{
        alert('Algo salio mal revisar API_KEY que sea valido')
      }
    })
  }
  
  render(){
    return(
      <Fragment>
        <Header 
          titulo="Consultando API de Noticias con React"
        />
        <div className="container white contenedor-noticias">
          <Formulario 
            buscarNoticias={this.buscarNoticias}
          />
          <ListaNoticas 
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    )
  }
}

export default App;
