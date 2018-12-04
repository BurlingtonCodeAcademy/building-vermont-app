import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const EventTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiEvent.name}</h1>
    <p>
      by <Link />
    </p>
    <p>{data.strapiEvent.id}</p>
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