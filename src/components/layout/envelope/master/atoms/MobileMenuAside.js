import styled from "styled-components"

const MobileMenuAside = styled.aside`
  display: flex;
  flex-direction: column;

  height: calc(100vh - 1.21em);
  height: calc(100vh - constant(safe-area-inset-bottom) - 55px - 1.21em);
  height: calc(100vh - env(safe-area-inset-bottom) - 55px - 1.21em);

  width: 0;
  max-width: 240px;
  position: fixed;
  top: 1.21em;
  top: calc(env(safe-area-inset-top) + 55px + 1.21em);
  left: -15rem;

  align-items: stretch;

  overflow-y: auto;

  padding: 0;

  transition: left .21s ease-in, width: .89 ease-in;

  border-radius: 0 13px 0 0;

  /* Apple device notches fix */
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);

  /* mobile viewport bugfix - https://allthingssmitty.com/2020/05/11/css-fix-for-100vh-in-mobile-webkit/ */
  min-height: fill-availble;

  &.is-shown {
    left: 0;
    width: 100%;
    box-shadow: 5px 3px 5px 0 rgba(0, 0, 0, .21);
  }

  .container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`

export default MobileMenuAside