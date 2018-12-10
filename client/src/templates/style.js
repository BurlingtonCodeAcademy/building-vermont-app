import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const StyleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.allStrapiBuilding.edges[0].node.style} design</h1>
    <ul>
      {data.allStrapiBuilding.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/buildings/${document.node.id}`}>{document.node.name}</Link>
          </h2>
          <p>A {document.node.type} built in {document.node.year} in {document.node.city}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default StyleTemplate;

export const query = graphql`
  query StyleTemplate($style: String!) {
    allStrapiBuilding(
      filter: {
        style: { eq: $style }
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
