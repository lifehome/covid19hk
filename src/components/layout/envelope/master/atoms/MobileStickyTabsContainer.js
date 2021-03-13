import styled from "styled-components"

const MobileStickyTabsContainer = styled.div`
  width: 100%;

  position: fixed;
  bottom: 0;

  padding-left: constant(safe-area-inset-left);
  padding-left: env(safe-area-inset-left);

  padding-right: constant(safe-area-inset-right);
  padding-right: env(safe-area-inset-right);

  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

MobileStickyTabsContainer.displayName = "MobileStickyTabsContainer"

export default MobileStickyTabsContainer