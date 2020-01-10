import React from 'react';
import PropTypes from 'prop-types';

//recimos la notica por demio de props
const Noticia = ({noticia}) => {
    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={noticia.urlToImage} alt={noticia.title}/>
                    <span className="card-title">{noticia.source.name}</span>
                </div>
            </div>
            <div className="card-content">
                <h3>{noticia.title}</h3>
                <p>{noticia.description}</p>
            </div>
            <div className="card-action">
                <a href={noticia.url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn orange">Ver Noticia</a>
            </div>
        </div>
    );
}

//especificamos los tipos de datos que recibimos
Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
 
export default Noticia;