import React from 'react'

function Time({ children, wrapper: Wrapper = 'h1', ...props }) {
  return (
    <Wrapper className={`text-5xl md:text-9xl`} {...props}>
      {children}
    </Wrapper>
  )
}

export default Time
