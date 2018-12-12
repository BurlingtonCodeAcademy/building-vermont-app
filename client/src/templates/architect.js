import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import marked from 'marked';
import Img from 'gatsby-image';

const ArchitectTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArchitect.name}</h1>
    <div className="floating">
      {/* <div className=".index-column"> */}
      <figure>
        <Img fixed={data.strapiArchitect.image.childImageSharp.fixed} />
      </figure>
      {/* </div> */}
      <p dangerouslySetInnerHTML={{ __html: (marked(data.strapiArchitect.bio)) }} />
    </div>
    <h3>&nbsp;Designed by {data.strapiArchitect.name}:</h3>
    <ul>
      {data.strapiArchitect.buildings.map(document => (
        <li key={document.id}>
          <h3>
            <Link to={`/buildings/${(document.name).split(' ').join('-')}`}>{document.name}</Link>
          </h3>
          <div>A {document.style} {document.type} built in {document.year}</div>
        </li>
      ))}
    </ul>
  </Layout>
);

export default ArchitectTemplate;

export const query = graphql`
  query ArchitectTemplate($id: String!) {
    strapiArchitect(id: { eq: $id }) {
      id
      name
      bio
      image {
        childImageSharp {
          fixed(height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      buildings {
            id
            name
            style
            year
            type
        }
    }
  }
`;

