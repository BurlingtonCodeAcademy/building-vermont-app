import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const BuildingTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiBuilding.name}</h1>
    {/* <p>
      by{' '}
      <Link to={`/authors/${data.strapiBuilding.author.id}`}>
        {data.strapiBuilding.author.username}
      </Link>
    </p> */}
    <p>{data.strapiBuilding.id}</p>
  </Layout>
)

export default BuildingTemplate

export const query = graphql`
  query BuildingTemplate($id: String!) {
    strapiBuilding(id: { eq: $id }) {
      id
      name
    }
  }
`
