/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Footer from './footer'
import "./Layout.css"
import '../pages/index.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          {children}
          <Link to="/" className="classe2">Tela Inicial</Link>{' – '}
          <Link to="/sobre" className="classe2">Sobre a Arrecadação</Link>{' – '}
          <Link to="/vaquinha" className="classe2">Vaquinha</Link>{' – '}
          <Link to="/mobilizadores" className="classe2">Mobilizadores</Link>
        </main>
        
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
