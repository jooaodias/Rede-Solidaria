import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import { Link } from 'gatsby'
import './footer.css';

const Footer = () => (
    <div>
        <Container className="Footer text-center">
            <Row>
                <Col>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <Link tag="a" href="https://www.gatsbyjs.org" style={{color: "#fff", textDecoration: "none"}}>Gatsby</Link>
                </Col>
            </Row>
        </Container>
    </div>
        
)

export default Footer;