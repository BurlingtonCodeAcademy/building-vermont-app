import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import './index.css'

function uniqueYear(arr) {
  if (arr.length === 0) return arr;
  let ret = [arr[0]];
  for (let i = 1; i < arr.length; i++) { //Start loop at 1: arr[0] can never be a duplicate
    if (arr[i - 1].node.year !== arr[i].node.year) {
      ret.push(arr[i]);
    }
  }
  return ret;
}

function builtInYear(arr, year) {
  if (arr.length === 0) return arr;
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    if (year === arr[i].node.year) {
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
          <div className="row">
            <h3 style={{marginRight: 4}}><Link to={`/buildings/${(document.node.year)}`}>{document.node.year}</Link></h3>
            <div>{(builtInYear(data.allStrapiBuilding.edges, document.node.year)).map(document => (" - " + document.node.name))}
            </div>
          </div>
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
          name
          year
            }
      }
    }
  }
`;