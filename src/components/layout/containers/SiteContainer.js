import React from "react"

// styled-components import
import styled from "styled-components"

// Customized page components
const TheContainer = styled.div`
  // Important directive: Make the container fill the entire page
  height: 100vh;
`

// Final component
const MasterContainer = props => {
  return (
    <TheContainer id={props.id} className={props.className}>
      {props.children}
    </TheContainer>
  )
}

export default MasterContainer