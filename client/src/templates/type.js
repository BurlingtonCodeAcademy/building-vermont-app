import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const TypeTemplate = ({ data }) => (
  <Layout>
    <h1>{data.allStrapiBuilding.edges[0].node.type}</h1>
    <ul>
      {data.allStrapiBuilding.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/buildings/${document.node.id}`}>{document.node.name}</Link>
          </h2>
          <p>A {document.node.style} {document.node.type} in {document.node.city}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default TypeTemplate;

export const query = graphql`
  query TypeTemplate($type: String!) {
    allStrapiBuilding(
      filter: {
        type: { eq: $type }
      }
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
          architect {
            id
            name
            bio
          }
      }
    }
  }
}

`;
