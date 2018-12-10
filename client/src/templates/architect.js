import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import marked from 'marked';

const ArchitectTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArchitect.name}</h1>
    <p dangerouslySetInnerHTML={{ __html: (marked(data.strapiArchitect.bio))}} />
    <p>
    </p>
    <ul>
    {data.strapiArchitect.buildings.map(document => (
        <li key={document.id}>
          <h2>
            <Link to={`/buildings/${document.id}`}>{document.name}</Link>
          </h2>
          <p>A {document.style} {document.type} built in {document.year}</p>
        </li>
      ))}
      {/* {data.strapiArchitect.architects.map(architect => (
        <li key={article.id}>
          <h2>{architect.name}</h2>
          <p>{article.content}</p>
        </li>
      ))} */}
    </ul>
  </Layout>
);

export default ArchitectTemplate;

export const query = graphql`
  query ArchitectTemplate($id: String!) {
    strapiArchitect(id: { eq: $id }) {
      id
      name
      bio
      buildings {
            id
            name
            style
            year
            type
        }
    }
  }
`;

