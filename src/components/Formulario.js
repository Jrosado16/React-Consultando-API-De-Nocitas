import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    state = { 
        pais: '',
        tipoNoticia: ''
     }

     //Escuhcamos cuando selecionamos un pais y un tipo de Noticia
     handelChange = (e) => {
         e.persist();
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            //Mandamos los datos para buscar las notcias
            this.props.buscarNoticias(this.state.pais, this.state.tipoNoticia)
        })

    }
    render() { 
        return ( 
            <div className="buscador">
                <h2 className="center">Buscar Noticias</h2>
                <form className="row">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="input-field">
                                <select onChange={this.handelChange} name='pais'>
                                    <option value="ar">Argentina</option>
                                    <option value="co">Colombia</option>
                                    <option value="mx">Mexico</option>
                                    <option value="us">Estados Unidos</option>
                                </select>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <div className="input-field">
                                <select onChange={this.handelChange} name='tipoNoticia'>
                                    <option value="general">General</option>
                                    <option value="business">Negocios</option>
                                    <option value="entertainment">Entretenimiento</option>
                                    <option value="health">Salud</option>
                                    <option value="science">Ciencia</option>
                                    <option value="sports">Deportes</option>
                                    <option value="technology">Tecnologia</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
         );
    }
}

//especificamos los tipos de datos que recibimos
Formulario.porpTypes = {
    buscarNoticias: PropTypes.func.isRequired
}
 
export default Formulario;