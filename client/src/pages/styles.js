import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import './index.css'

function uniqueStyle(arr) {
  if (arr.length === 0) return arr;
  let ret = [arr[0]];
  for (var i = 1; i < arr.length; i++) { //Start loop at 1: arr[0] can never be a duplicate
    if (arr[i-1].node.style !== arr[i].node.style) {
      ret.push(arr[i]);
    }
  }
  return ret;
}

const StylePage = ({ data }) => (
  <Layout>
    <h1>Styles</h1>
    <ul>
      {(uniqueStyle(data.allStrapiBuilding.edges)).map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/buildings/${(document.node.style).split(' ').join('-')}`}>{document.node.style}</Link>
          </h2>
        </li>
      ))}
    </ul>
  </Layout>
);

export default StylePage;

export const pageQuery = graphql`
  query StyleQuery {
    allStrapiBuilding(
      sort: {
        fields: [ style ], order: ASC
      }
    ) {
      edges {
        node {
          id
          style
            }
      }
    }
  }
`;