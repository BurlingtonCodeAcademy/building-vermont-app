import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const ArchitectTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArchitect.username}</h1>
    <ul>
      {data.strapiArchitect.architects.map(architect => (
        // <li key={article.id}>
          <h2>{architect.name}</h2>
          // <p>{article.content}</p>
        // </li>
      ))}
    </ul>
  </Layout>
);

export default ArchitectTemplate;

export const query = graphql`
  query ArchitectTemplate($id: String!) {
    strapiArchitect(id: { eq: $id }) {
      id
    }
  }
`;
