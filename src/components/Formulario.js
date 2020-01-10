import React from 'react';
import PropTypes from 'prop-types';

// Este puede ser un Stateless Component porque maneja el mismo estado del padre 
const Formulario = (props) => (
    <div className="buscador">
        <h2 className="center">Buscar Noticias</h2>
        <form className="row">
            <div className="row">
                <div className="col s12 m6">
                    <div className="input-field">
                        <select onChange={props.cambiarValores} name='pais'>
                            <option value="ar">Argentina</option>
                            <option value="co">Colombia</option>
                            <option value="mx">Mexico</option>
                            <option value="us">Estados Unidos</option>
                        </select>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="input-field">
                        <select onChange={props.cambiarValores} name='tipoNoticia'>
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

Formulario.propTypes = {
    cambiarValores: PropTypes.func.isRequired
};

export default Formulario;