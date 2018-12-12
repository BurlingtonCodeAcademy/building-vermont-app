import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import moment from 'moment';
import marked from 'marked'

const PostTemplate = ({ data }) => (
  <Layout>
          <p>{moment(data.strapiPost.date).format('MMMM Do, YYYY')}</p>
          <h2>{data.strapiPost.title}</h2>

          <div
            dangerouslySetInnerHTML={{ __html: marked(data.strapiPost.body) }}
          />
          <p>Posted by: {data.strapiPost.author}</p>
  </Layout>
);

export default PostTemplate;

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: { eq: $id }) {
      id
      title
      body
      author
      date
}
  }
`;
