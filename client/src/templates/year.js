import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const YearTemplate = ({ data }) => (
  <Layout>
    <h1>Built in {data.allStrapiBuilding.edges[0].node.year}</h1>
    <ul>
      {data.allStrapiBuilding.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/buildings/${(document.node.name).split(' ').join('-')}`}>{document.node.name}</Link>
          </h2>
          <p>A {document.node.style} {document.node.type} in {document.node.city}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default YearTemplate;

export const query = graphql`
  query YearTemplate($year: Int!) {
    allStrapiBuilding(
      filter: {
        year: { eq: $year }
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
