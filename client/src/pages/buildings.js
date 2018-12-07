import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const BuildingPage = ({ data }) => (
  <Layout>
    <h1>Buildings</h1>
    <ul>
      {data.allStrapiBuilding.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/buildings/${document.node.id}`}>{document.node.name}</Link>
          </h2>
          <p>A {document.node.style} {document.node.type} built in {document.node.year}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default BuildingPage;

export const pageQuery = graphql`
  query BuildingQuery {
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