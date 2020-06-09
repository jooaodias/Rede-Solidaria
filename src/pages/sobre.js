import React from "react"
import {
  Container, Row, Col,
} from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import imagem from '../images/rede2.jpeg';
// import ifsp from '../images/ifsp.png';

import './index.css';

const Sobre = () => (
  <Layout>
    <SEO title="Sobre" />
    <Container>
      <Row>
        <Col>
          <h1>Sobre a Arrecadação</h1>
          <p>A iniciativa veio de pais, mães, alunos, professores e servidores do Instituto Federal de São Paulo Campus Campinas. Também contamos com a união das representações: Grêmio Estudantil do IFSP (UEIFC), Grêmio Estudantil da Etecap (Chapa Lótus), Diretorio Acadêmico (DA) e o Sociopedagógico.</p>
          <p>Pretendemos ajudar <b>180 famílias</b> em situação de vulnerabilidade social na Comunidade do IFSP - Campinas. Todo o dinheiro arrecadado será revertido em cestas básicas para essas famílias. Também estamos aceitando alimentos para a composição de cestas. Contamos com a sua ajuda nessa luta pela solidariedade. <span role="img" aria-label="Braço e mão">💪🏼✊🏽</span></p>
          <p>Nossa meta é de R$18.000,00. Se todo mundo contribuir um pouquinho, chegaremos lá bem rápido!</p>
        </Col>
      </Row>
        
    </Container>

  </Layout>
)

export default Sobre;