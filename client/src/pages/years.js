import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import './index.css'

function uniqueYear(arr) {
  if (arr.length === 0) return arr;
  let ret = [arr[0]];
  for (var i = 1; i < arr.length; i++) { //Start loop at 1: arr[0] can never be a duplicate
    if (arr[i-1].node.year !== arr[i].node.year) {
      ret.push(arr[i]);
    }
  }
  return ret;
}

const YearPage = ({ data }) => (
  <Layout>
    <h1>Year of Construction</h1>
    <ul>
      {(uniqueYear(data.allStrapiBuilding.edges)).map(document => (
        <li key={document.node.id}>
          <h3>
            <Link to={`/buildings/${(document.node.year)}`}>{document.node.year}</Link>
          </h3>
        </li>
      ))}
    </ul>
  </Layout>
);

export default YearPage;

export const pageQuery = graphql`
  query YearQuery {
    allStrapiBuilding(
      sort: {
        fields: [ year ], order: ASC
      }
    ) {
      edges {
        node {
          id
          year
            }
      }
    }
  }
`;