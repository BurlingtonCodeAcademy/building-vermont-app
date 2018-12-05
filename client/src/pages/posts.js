import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import moment from 'moment';

const PostPage = ({ data }) => (
  <Layout>
    <h1>The Future of Architecture in Vermont Blog</h1>
    <ul>
      {data.allStrapiPost.edges.map(document => (
        <li key={document.node.id}>
          <p>{moment(document.node.date).format("MMMM Do, YYYY")}</p>
          <h2>
            {document.node.title}
          </h2>
            
            <div dangerouslySetInnerHTML={{ __html: (document.node.body)}} />          
          <p>Posted by: {document.node.author}
          </p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default PostPage;

export const pageQuery = graphql`
  query PostQuery {
    allStrapiPost {
      edges {
        node {
          title
          body
          author
          date
          image1
          image2
        }
      }
    }
  }
`;