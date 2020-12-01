import * as React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Time from '../components/time'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Time>{data.site.buildTime}</Time>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      buildTime(formatString:"HH:MM")
    }
  }
`

export default IndexPage
