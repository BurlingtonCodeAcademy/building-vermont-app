import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import './index.css'

function uniqueTown(arr) {
  if (arr.length === 0) return arr;
  let ret = [arr[0]];
  for (var i = 1; i < arr.length; i++) { //Start loop at 1: arr[0] can never be a duplicate
    if (arr[i-1].node.city !== arr[i].node.city) {
      ret.push(arr[i]);
    }
  }
  return ret;
}

function inThisTown(arr, town) {
  if (arr.length === 0) return arr;
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    if (town === arr[i].node.city) {
      ret.push(arr[i]);
    }
  }
  return ret.sort(function (a, b) {
    let first = a.node.name.toUpperCase();
    let second = b.node.name.toUpperCase();
  
    return first.localeCompare(second);
  });
}

const TownPage = ({ data }) => (
  <Layout>
    <h1>All Buildings by Town</h1>
    <ul>
      {(uniqueTown(data.allStrapiBuilding.edges)).map(document => (
        <li key={document.node.id}>
          <div className="column">
          <h3 style={{marginRight: 4}}><Link to={`/buildings/${(document.node.city).split(' ').join('-')}`}>{document.node.city}</Link></h3>
          <ul>{(inThisTown(data.allStrapiBuilding.edges, document.node.city)).map(document => (
        <li key={document.node.id}>
          <h4>
            <Link to={`/buildings/${(document.node.name).split(' ').join('-')}`}>{document.node.name}</Link>
          </h4>
        </li>
      ))}

          </ul>
          </div>
        </li>
      ))}
    </ul>
  </Layout>
);


export default TownPage;

export const pageQuery = graphql`
  query TownQuery {
    allStrapiBuilding(
      sort: {
        fields: [ city ], order: ASC
      }
    ) {
      edges {
        node {
          id
          name
          city
            }
      }
    }
  }
`;