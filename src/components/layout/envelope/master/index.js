import React, { useEffect, useState, useRef} from "react"

// reset all styles
import "reset-css"

// global styles
import "./master.scss"

// layout elements import
import SiteContainer from "@layout/containers/SiteContainer"
import MobileMenuAside from "./atoms/MobileMenuAside"
import SiteNavbar from "./atoms/SiteNavbar"
import MobileStickyTabsContainer from "./atoms/MobileStickyTabsContainer"

const MasterLayout = props => {
  /* Burger Menu Toggle Handler -- START */
  const [burgerOpened, setBurgerOpened] = useState(false)

  const toggleBurger = () => setBurgerOpened(!burgerOpened)

  const mobileMenuRef = useRef(null)
  const burgerBtnRef  = useRef(null)

  useEffect(() => {
    const burgerToggleEventHandler = e => {
      if (
        mobileMenuRef.current &&
        mobileMenuRef.current.className.includes("is-shown") &&
        !mobileMenuRef.current.contains(e.target) &&
        !burgerBtnRef.current.contains(e.target)
      )
        toggleBurger()
    }

    document.addEventListener("click", burgerToggleEventHandler)
    document.addEventListener("touchend", burgerToggleEventHandler)

    return () => {
      document.removeEventListener("click", burgerToggleEventHandler)
      document.removeEventListener("touchend", burgerToggleEventHandler)
    }
  })
  /* Burger Menu Toggle Handler -- END */

  return (
    <React.Fragment>
      <div id="wars-mobilemenu-container">
        <div id="wars-mobilemenu-modal">
          <div id="burger-backdrop" className={burgerOpened ? "dimmed" : null}></div>
          <MobileMenuAside id="wars-mobilemenu" className={`aside navbar-menu is-pulled-left is-hidden-tablet ${ burgerOpened ? "is-shown" : "" }`} ref={mobileMenuRef}>
            <p>123123123123 more text here</p>
            <p>123123123123 more text here</p>
            <p>123123123123 more text here</p>
          </MobileMenuAside>
        </div>
      </div>
      <SiteContainer>
        <SiteNavbar id="wars-navbar" className="navbar is-primary">
          <div className="container is-justify-content-center">
            <div className="navbar-brand">
              <div role="button" id="burgerBtn" className={`navbar-burger burger is-hidden-tablet ${ burgerOpened ? "is-active" : "" }`} onClick={toggleBurger} onKeyPress={toggleBurger} ref={burgerBtnRef} tabIndex={0}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <a className="navbar-item brand-text" href="/" target="_self">
                <span role="img" aria-label="">🤒</span>&nbsp;武漢肺炎民間資訊&nbsp;<span role="img" aria-label="">😷</span>
              </a>
              <div id="socialBtn" className="is-hidden-tablet">
                {/* Put a sharing button here, probably need an extra component for the share menu popup */}
              </div>
            </div>
          </div>
        </SiteNavbar>
        <main id="site-content">
          {props.children}
        </main>
        <MobileStickyTabsContainer className="is-hidden-tablet">
          <div className="container">
            <p>Hello world! MobileStickyTabs here!</p>
          </div>
        </MobileStickyTabsContainer>
      </SiteContainer>
    </React.Fragment>
  )
}

MasterLayout.displayName = "MasterLayout"

export default MasterLayout