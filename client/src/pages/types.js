import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import './index.css'

function uniqueType(arr) {
  if (arr.length === 0) return arr;
  let ret = [arr[0]];
  for (var i = 1; i < arr.length; i++) { //Start loop at 1: arr[0] can never be a duplicate
    if (arr[i-1].node.type !== arr[i].node.type) {
      ret.push(arr[i]);
    }
  }
  return ret;
}

const TypePage = ({ data }) => (
  <Layout>
    <h1>Types of Construction</h1>
    <ul>
      {(uniqueType(data.allStrapiBuilding.edges)).map(document => (
        <li key={document.node.id}>
          <h3>
            <Link to={`/buildings/${(document.node.type).split(' ').join('-')}`}>{document.node.type}</Link>
          </h3>
        </li>
      ))}
    </ul>
  </Layout>
);

export default TypePage;

export const pageQuery = graphql`
  query TypeQuery {
    allStrapiBuilding(
      sort: {
        fields: [ type ], order: ASC
      }
    ) {
      edges {
        node {
          id
          type
            }
      }
    }
  }
`;