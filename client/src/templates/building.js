import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import marked from 'marked';

const BuildingTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiBuilding.name}</h1>
    <h3> by <Link to={`/architects/${data.strapiBuilding.architect.id}`}>{data.strapiBuilding.architect.name}</Link></h3>
    <p dangerouslySetInnerHTML={{ __html: (marked(data.strapiBuilding.description))}} />

    <p>
      Year: <Link to={`/buildings/${data.strapiBuilding.year}`}>{data.strapiBuilding.year}</Link>
    </p>
    <p>
      Style: <Link to={`/buildings/${(data.strapiBuilding.style).split(' ').join('-')}`}>{data.strapiBuilding.style}</Link>
      </p>
      <p>
      Type: <Link to={`/buildings/${(data.strapiBuilding.type).split(' ').join('-')}`}>{data.strapiBuilding.type}</Link>
      </p>

    <p>Location: {data.strapiBuilding.street}, <Link to={`/buildings/${(data.strapiBuilding.city).split(' ').join('-')}`}>{data.strapiBuilding.city}</Link></p>
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
      architect {
        id
        name
        bio
      }
    }
  }
`;
