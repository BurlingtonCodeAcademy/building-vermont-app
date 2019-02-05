import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import moment from 'moment';
import '../pages/index.css'

const DateTemplate = ({ data }) => (
  <Layout>
    <h1>{moment(data.allStrapiEvent.edges[0].node.date).format("MMMM Do")}</h1>
    <ul>
      {data.allStrapiEvent.edges.map(document => (
        <li key={document.node.id}>
        <h3>
          <Link to={`/events/${moment(document.node.date).format('MM-DD-YY')}/${(document.node.name).split(' ').join('-')}`}>{document.node.name}</Link>
        </h3>
        </li>
      ))}
    </ul>



    <p>
    </p>

  </Layout>
);

export default DateTemplate;

export const query = graphql`
  query DateTemplate($date: String!) {
    allStrapiEvent(
      filter: {
        date: { eq: $date }
      }
      sort: {
        fields: [ name ], order: ASC
      }
    ) {
      edges {
        node {
      id
      name
      date
    }
  }
}
}
`;
