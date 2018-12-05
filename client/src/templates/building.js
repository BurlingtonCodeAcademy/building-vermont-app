import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const BuildingTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiBuilding.name}</h1>
    <p>
      A {data.strapiBuilding.style} {data.strapiBuilding.type} built in {data.strapiBuilding.year}
    </p>
    <p>{data.strapiBuilding.description}</p>

    <p>Location: {data.strapiBuilding.street}, {data.strapiBuilding.city}</p>
    
  </Layout>
);

export default BuildingTemplate;

export const query = graphql`
  query BuildingTemplate($id: String!) {
    strapiBuilding(id: { eq: $id }) {
      id
      name
      style
      year
      type
      description
      city
      street
    }
  }
`;
