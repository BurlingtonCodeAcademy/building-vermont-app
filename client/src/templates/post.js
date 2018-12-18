import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import moment from 'moment';
import marked from 'marked';
import Disqus from 'disqus-react'
import '../pages/index.css'


const PostTemplate = ({ data }) => {
  const disqusShortname = 'http-example-com-7';
  const disqusConfig = {

    identifier: data.strapiPost.id,
    title: data.strapiPost.title
  }
  return (
  <Layout>
    <p>{moment(data.strapiPost.date).format('MMMM Do, YYYY')}</p>
    <h2>{data.strapiPost.title}</h2>

    <div className="post-body"
      dangerouslySetInnerHTML={{ __html: marked(data.strapiPost.body) }}
    />
    <p>Posted by: {data.strapiPost.author}</p>

    <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
  </Layout>
  )
};

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
