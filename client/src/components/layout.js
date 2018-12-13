import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Contact from './contact';
import Header from './header';
import Footer from './footer';
import './layout.css';
import favicon from '../images/icons8-home-64.png';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'A database of historical buildings in Vermont',
            },
            {
              name: 'keywords',
              content:
                'architecture, architect, building, buildings, history, designers, vermont, events',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {console.log(favicon)}
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            display: 'flex',
            flexFlow: 'column',
            minHeight: '71vh',
          }}
        >
          {children}
        </div>
        <Contact />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
