import styled from "styled-components"

const NavbarContainer = styled.div`
  /* navbar site-wide styling */
  position: sticky;
  top: 0;
  width: 100vw;

  box-shadow: 0px 3px 3px 0px rgba(0,0,0,.21);

  .brand-text {
    font-weight: 900;
  }

  /* Menu item positioning */
  #burgerBtn, #socialBtn {
    min-height: 55px;
    min-width: 55px;
  }

  // patch Apple iDevices notch
  // NOTE: Since we don't want the entire document padded, so we pad the navbar only
  min-height: 55px;
  min-height: calc(55px + constant(safe-area-inset-top));
  min-height: calc(55px + env(safe-area-inset-top));
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);

  z-index: 89;

  .container {
    justify-content: space-between;
    .navbar-brand {
      min-height: 55px;
      justify-content: space-between;

      & > .navbar-item,
      & .navbar-link {
        :hover {
          background: unset !important;
        }
      }

      .navbar-burger {
        margin-left: unset !important;
      }

      .brand-text {
        flex-grow: 1;
        justify-content: center;
      }
    }
  }
`

NavbarContainer.displayName = "NavbarContainer"

export default NavbarContainer