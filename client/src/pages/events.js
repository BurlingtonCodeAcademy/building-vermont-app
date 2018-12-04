import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const eventPage = ({ data }) => (
  <Layout>
    <h1>Event Calendar</h1>
  </Layout>
);

export default eventPage;
