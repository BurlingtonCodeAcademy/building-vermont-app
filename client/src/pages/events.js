import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import MyCalendar from '../components/calendar';


const eventPage = ({ data }) => (
  <Layout>    
    <h1>Event Calendar</h1>
    <MyCalendar />
  </Layout>
);

export default eventPage;
