import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import moment from 'moment';
import '../pages/index.css'

const DateTemplate = ({ data }) => (
  <Layout>
    <h1>{moment(data.strapiEvent.date).format("MMMM Do")}</h1>
    <p>
    <Link to={`/events/${moment(data.strapiEvent.date).format('MM-DD-YY')}/${(data.strapiEvent.name).split(' ').join('-')}`}>{data.strapiEvent.name}</Link>
    </p>
    
  </Layout>
);

export default DateTemplate;

export const query = graphql`
  query DateTemplate($date: String!) {
    strapiEvent(date: { eq: $date }) {
      id
      name
      date
    }
  }
`;
