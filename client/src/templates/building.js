import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import marked from 'marked';
import '../pages/index.css'

let imageArray = []
const strapiHost = "http://localhost:1337"

const BuildingTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiBuilding.name}</h1>
    <h3> by <Link to={`/architects/${(data.strapiBuilding.architect.name).split(' ').join('-')}`}>{data.strapiBuilding.architect.name}</Link></h3>

    <div className="building-images">
    {data.strapiBuilding.image.forEach(function(image) {
      imageArray.push(<a href={strapiHost + image.url}><img key={image.url.slice(9,39)} src={strapiHost + image.url} /></a>)
    })}
    {imageArray[0]}
    {imageArray[1]}
    {imageArray[2]}
    {imageArray[3]}
    </div>

    <h4>
      <div style={{ display: 'flex'}}>
        <div style={{ paddingRight: 30 }}>Year: <Link to={`/buildings/${data.strapiBuilding.year}`}>{data.strapiBuilding.year}</Link></div>
        <div style={{ paddingRight: 30 }}>Style: <Link to={`/buildings/${(data.strapiBuilding.style).split(' ').join('-')}`}>{data.strapiBuilding.style}</Link></div>
        <div style={{ paddingRight: 30 }}>Type: <Link to={`/buildings/${(data.strapiBuilding.type).split(' ').join('-')}`}>{data.strapiBuilding.type}</Link></div>
        <div style={{ paddingRight: 30 }}>Location: {data.strapiBuilding.street}, <Link to={`/buildings/${(data.strapiBuilding.city).split(' ').join('-')}`}>{data.strapiBuilding.city}</Link></div>
      </div>
    </h4>
    <p dangerouslySetInnerHTML={{ __html: (marked(data.strapiBuilding.description)) }} />
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
      image {
        url
      }
      architect {
        id
        name
        bio
      }
    }
  }
`;