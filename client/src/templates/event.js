import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import moment from 'moment';
import '../pages/index.css'

const EventTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiEvent.name}</h1>
    <h3>
    <Link to={`/events/${moment(data.strapiEvent.date).format('MM-DD-YY')}`}>{moment(data.strapiEvent.date).format('MMMM Do')}</Link>
    </h3>
    <h4>
    <a href={data.strapiEvent.link}>{data.strapiEvent.link}</a>
    </h4>
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
