import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import moment from 'moment';

const DateTemplate = ({ data }) => (
  <Layout>
    <h1>{moment(data.strapiEvent.date).format("MMMM Do")}</h1>
    <p>
      {data.strapiEvent.name}
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
