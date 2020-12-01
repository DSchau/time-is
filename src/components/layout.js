import React from 'react'

import SEO from './seo'

function Layout({ children }) {
  return (
    <main className={`flex justify-center h-full self-center`}>
      <SEO />
      {children}
    </main>
  )
}

export default Layout
