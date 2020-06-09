import React from 'react'
import { Helmet } from 'react-helmet';

import './Contato.css';

const Contato = (props) => {
    return (
        <>
            <Helmet>
                <script
                    src="https://kit.fontawesome.com/2ccd7e2e05.js"
                    crossorigin="anonymous"
                    rel="stylesheet">
                </script>
            </Helmet>
            <div className="Contato">
                <p className="Name"><i className="fas fa-user"></i>{' ' + props.name}</p>
                <p className="Telefone"><i className="fas fa-phone"></i>{' ' + props.telefone}</p>
                <p className="Cargo"><i className="fas fa-book"></i>{' ' + props.cargo}</p>
            </div>
        </>
    )
}

export default Contato
