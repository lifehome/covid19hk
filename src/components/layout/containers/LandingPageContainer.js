import React from "react"

// styled-components import
import styled from "styled-components"

// Customized page components
const TheContainer = styled.div`
  
`

const LandingPageContainer = props => {
  return (
    <TheContainer id={props.id} className={props.className}>
      {props.children}
    </TheContainer>
  )
}

export default LandingPageContainer