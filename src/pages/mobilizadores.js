import React from 'react';
import {
    Container, Row, Col
} from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contato from '../components/Contato/Contato';

import './index.css';

const mobilizadores = (props) => {
    return (
        <Layout>
            <SEO title="Mobilizadores" />
            <Container>
                <Row>
                    <Col>
                        <h1>Mobilizadores</h1>
                        <p>Nós somos Alunos, Pais de alunos, Professores e Servidores do IFSP Campinas e da ETECAP dispostos para ajudar as famílias em vulnerabilidade social por conta da atual Pandemia.</p>
                        <p>Estamos com a nossa Vakinha online e para doar alimentos <b>entre em contato conosco</b> que faremos a logística para arrecadarmos os alimentos. Os contatos de alguns mobilizadores estão abaixo:</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <Contato
                            name={"João Vitor"}
                            telefone={"(99)99999999"}
                            cargo={"Estudante"}
                        />
                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <Contato
                            name={"João Vitor"}
                            telefone={"(99)99999999"}
                            cargo={"Estudante"}
                        />
                    </Col>
                </Row>

            </Container>
        </Layout>
    )
}

export default mobilizadores
