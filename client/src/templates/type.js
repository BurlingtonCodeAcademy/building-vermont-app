import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import '../pages/index.css'

function pluralize(myType) {
  let wordWithoutLastLetter = (myType).slice(0, -1);
  let lastLetter = (myType).slice(-1);
  if (lastLetter === "y") {
    return (wordWithoutLastLetter + "ies");
  } 
  else if (lastLetter === "x") {
    return (wordWithoutLastLetter + "xes");
  }
  else {
    return (wordWithoutLastLetter + lastLetter + "s");
  }
}

const TypeTemplate = ({ data }) => (
  <Layout>
    <h1>{pluralize(data.allStrapiBuilding.edges[0].node.type)}</h1>
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
