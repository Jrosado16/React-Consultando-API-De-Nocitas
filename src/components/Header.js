import React from 'react';
import PropTypes from 'prop-types';

//recivimos el titulo en props
const Header = ({titulo}) => {
    return ( 
        <nav className="nav-wrapper light-blue darken-3">
            <a href="#!" className="brand-logo center">{titulo}</a>
        </nav>
     );
}
//especificamos los tipos de datos que recibimos
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;