import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

//recivimos las noticias por medio del props
const ListaNoticias = ({noticias}) => {
    return ( 
        <div className="row">
            {/*Recorremos las noticias y mostramos cada una en el componete noticia */}
            {noticias.map((noticia, index) => (
                <Noticia 
                key={index}
                noticia={noticia}
                />
            ))}
        </div>
     );
}

//especificamos los tipos de datos que recibimos
ListaNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}

export default ListaNoticias;