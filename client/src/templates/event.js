import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const EventTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiEvent.name}</h1>
    <ul>
      {data.strapiEvent.events.map(event => (
        <li key={event.id}>
          <h2>{event.id}</h2>
          <p>{article.content}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default EventTemplate;

export const query = graphql`
  query EventTemplate($id: String!) {
    strapiEvent(id: { eq: $id }) {
      id
    }
  }
`;
