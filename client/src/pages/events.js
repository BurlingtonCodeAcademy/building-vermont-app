import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import moment from 'moment';

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Upcoming Events</h1>
    <ul>
      {data.allStrapiEvent.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            {document.node.name}
          </h2>
          <p>{moment(document.node.date).format("MMMM Do")}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query EventQuery {
    allStrapiEvent {
      edges {
        node {
          id
          name
          date
        }
      }
    }
  }
`;