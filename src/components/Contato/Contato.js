import React from 'react'
import { Helmet } from 'react-helmet';
import { Col } from 'reactstrap'

import './Contato.css';

const Contato = (props) => {
    return (
        <div className="Contato" >
            <p className="Name"><i className="fas fa-user"></i>{' ' + props.name}</p>
            <p className="Telefone"><i className="fas fa-phone"></i>{' ' + props.telefone}</p>
            <p className="Cargo"><i className="fas fa-book"></i>{' ' + props.cargo}</p>
        </div>
    )
}

export default Contato
