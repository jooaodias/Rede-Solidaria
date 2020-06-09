import React from "react"
import {
    Container, Row, Col, Button, Progress
} from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './index.css';

const vaquinha = () => {
    return (
        <Layout>
            <SEO title="Vaquinha" />
            <Container>
                <Row>
                    <Col>
                        <h1>Vaquinha</h1>
                        <p>Nos ajude e contribua para a nossa Vaquinha!<span role="img" aria-label="Vaca">🐄</span></p>
                        <a
                            href="https://www.vakinha.com.br/vaquinha/rede-solidaria-ifsp-campinas"
                            target="_blank" rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <Button className="btn fourth">
                                Doe!
                            </Button>
                        </a>
                        <div>
                            <Progress animated color="success" value="7" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default vaquinha
