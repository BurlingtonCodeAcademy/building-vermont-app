import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import './index.css'

const BuildingPage = ({ data }) => (
  <Layout>
    <h1>All Buildings</h1>
    <ul>
      {data.allStrapiBuilding.edges.map(document => (
        <li key={document.node.id}>
          <h3>
            <Link to={`/buildings/${(document.node.name).split(' ').join('-')}`}>{document.node.name}</Link>
          </h3>
          <p>A {document.node.style} {document.node.type} built in {document.node.year}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default BuildingPage;

export const pageQuery = graphql`
  query BuildingQuery {
    allStrapiBuilding(
      sort: {
        fields: [ name ], order: ASC
      }
    ) {
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