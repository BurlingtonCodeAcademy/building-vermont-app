import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import moment from 'moment';

const EventTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiEvent.name}</h1>
    <p>{moment(data.strapiEvent.date).format('MMMM Do')}</p>
    <a href={data.strapiEvent.link}>{data.strapiEvent.link}</a>
  </Layout>
);

export default EventTemplate;

export const query = graphql`
  query EventTemplate($name: String!) {
    strapiEvent(name: { eq: $name }) {
      id
      name
      date
      link
    }
  }
`;
