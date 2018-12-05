import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';


const IndexPage = ({ data }) => (
  <Layout>
    <h1>These are all the buildings</h1>
    <ul>
      {data.allStrapiBuilding.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.name}</Link>
          </h2>
          <p>A {document.node.style} {document.node.type} built in {document.node.year}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiBuilding {
      edges {
        node {
          id
          name
          style
          year
          type
          description
          city
          street
            }
      }
    }
  }
`;