import React, { Component, Fragment } from 'react';

import Header from '../components/Header';
import ListaNoticas from '../components/ListaNoticas';
import Formulario from '../components/Formulario';
import Loader from '../components/Loader';

class Pagina extends Component {
  state = {
    noticias: [],
    pais: 'ar',
    tipoNoticia: 'general',
    loading: false
  }
  componentDidMount(){
    this.buscarNoticias();
  }
  buscarNoticias = () => {
    //Ingresa una api_key valida aqui, es mejor manejar los keys a nivel de .env ;)
    const {pais, tipoNoticia} = this.state;
    const API_KEY = process.env.REACT_APP_API_KEY || 'API_KEY';
    const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${tipoNoticia}&apiKey=${API_KEY}`;

    //Hacemos el llamado a la api mediante fetch
    fetch(url, {
      method: 'GET',
    })
    .then(res => {
      this.setState({ loading: true });
      return res.json();
    })
    .then(data => {
      //Verificamos que la respuesta sea correcta y que tengamos una API_KEY
      if(data.status === "ok" && API_KEY){
        this.setState({
          noticias: data.articles,
          loading: false
        })
      }else{
        alert('Algo salio mal revisar API_KEY que sea valido');
      }
    })
  }
  // Esta funcion es manejarla a nivel de pagina, se vuelve mas global
  cambiarValores = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    }, () => this.buscarNoticias());
  }
  render() {
    let listaNoticia = <ListaNoticas 
      noticias={this.state.noticias}
    />;
    if(this.state.loading) {
      listaNoticia = <Loader />
    }
    return (
      <Fragment>
        <Header 
          titulo="Consultando API de Noticias con React"
        />
        <div className="container white contenedor-noticias">
          <Formulario 
            cambiarValores={this.cambiarValores}
          />
          {listaNoticia}
        </div>
      </Fragment>
    );
  }
}

export default Pagina;