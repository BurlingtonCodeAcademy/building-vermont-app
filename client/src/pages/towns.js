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
      console.log(arr[i])
      ret.push(arr[i]);
    }
  }
  return ret;
}

const TownPage = ({ data }) => (
  <Layout>
    <h1>Towns</h1>
    <ul>
      {(uniqueTown(data.allStrapiBuilding.edges)).map(document => (
        <li key={document.node.id}>
          <div className="row">
          <h3 style={{marginRight: 4}}><Link to={`/buildings/${(document.node.city).split(' ').join('-')}`}>{document.node.city}</Link></h3>
          <div>{(inThisTown(data.allStrapiBuilding.edges, document.node.city)).map(document => (" - " + document.node.name))}
          </div>
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