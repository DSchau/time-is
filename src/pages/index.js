import * as React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Time from '../components/time'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Time>{data.time.now}</Time>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    time {
      now(formatString:"kk:mm")
    }
  }
`

export default IndexPage
