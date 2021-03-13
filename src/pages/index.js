import React from "react"

// Layout import
import MasterLayout from "@layout/envelope/master"

// IndexPage: page components
import LandingPageContainer from "@layout/containers/LandingPageContainer"

// markup
const IndexPage = ({ props, data }) => {
  return (
    <MasterLayout>
      <LandingPageContainer id="indexpage">
        <p>Yo!</p>
      </LandingPageContainer>
    </MasterLayout>
  )
}

IndexPage.displayName = "IndexPage"

export default IndexPage
