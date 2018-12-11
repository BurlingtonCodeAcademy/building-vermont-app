import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const CityTemplate = ({ data }) => (
  <Layout>
    <h1>{data.allStrapiBuilding.edges[0].node.city}</h1>
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

export default CityTemplate;

export const query = graphql`
  query CityTemplate($city: String!) {
    allStrapiBuilding(
      filter: {
        city: { eq: $city }
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
