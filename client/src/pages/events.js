import React from 'react';
import { /*Link, */graphql } from 'gatsby';
import Layout from '../components/layout';
import Calendar from '../components/calendar';
import '../components/calendar.css';
import './index.css'

const EventPage = ({ data }) => (
  <Layout>
    <h1>Upcoming Events</h1>
    <Calendar
      className="App"
      events={data.allStrapiEvent.edges.map(document => document.node)}
    />
    {/* <ul>
      {data.allStrapiEvent.edges.map(document => (
        <li key={document.node.name.split(' ').join('-')}>
          <p>
            <Link
              to={`/events/${moment(document.node.date).format(
                'MM-DD-YY'
              )}/${document.node.name.split(' ').join('-')}`}
            >
              {document.node.name}
            </Link>
          </p>
        </li>
      ))}
    </ul> */}
  </Layout>
);

export default EventPage;

export const pageQuery = graphql`
  query EventQuery {
    allStrapiEvent(
      sort: {
        fields: [ date ], order: ASC
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
