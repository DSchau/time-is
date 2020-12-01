exports.sourceNodes = async function sourceNodes({ actions, createContentDigest }) {
  const now = new Date()

  const data = {
    now
  }

  const meta = {
    id: `gatsby-source-time-now`,
    parent: null,
    children: [],
    internal: {
      type: `Time`,
      content: JSON.stringify(data),
      contentDigest: createContentDigest(data)
    }
  }

  const node = Object.assign({}, data, meta)

  actions.createNode(node)
}
