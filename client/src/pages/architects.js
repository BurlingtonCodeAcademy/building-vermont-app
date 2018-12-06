import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import moment from 'moment';

const ArchitectPage = ({ data }) => (
  <Layout>
    <h1>Upcoming Events</h1>
    <ul>
      {data.allStrapiArchitect.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`architects/${document.node.id}`}>
              {document.node.name}
            </Link>
          </h2>
          <p>{moment(document.node.date).format('MMMM Do')}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default ArchitectPage;

export const pageQuery = graphql`
  query ArchitectQuery {
    allStrapiArchitect {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
