import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col} from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import imagem from '../images/rede2.jpeg';
import ifsp from '../images/ifsp.png';


const Sobre = () => (
  <Layout>
    <SEO title="Sobre" />
    <Container>
      <Row>
        <Col>
          <h1>Sobre a Arrecadação</h1>
          <img src={imagem}></img>
          <img src={ifsp}></img>
        </Col>
      </Row>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
    
  </Layout>
)

export default Sobre
