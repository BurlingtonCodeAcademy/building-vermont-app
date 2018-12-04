import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const ArchitectTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiUser.username}</h1>
    <ul>
      {data.strapiUser.articles.map(article => (
        <li key={article.id}>
          <h2>
            <Link to={`/${article.id}`}>{article.title}</Link>
          </h2>
          <p>{article.content}</p>
        </li>
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
