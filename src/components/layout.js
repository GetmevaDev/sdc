/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./Header/header"
import Footer from "./Footer/footer"
import classes from "./Header/header.module.scss"
import reactStringReplace from "react-string-replace"
import NavMenuButton from "./Header/NavigationMenu/NavMenu"

const Layout = ({ children }) => {

  const menu = useStaticQuery(graphql`
      {
          strapiNvigationMenu {
              Header_Menu {
                  Name_Page
                  Link_Page
                  id
                  Submenu {
                      Link
                      Name_Submenu
                      id
                  }
              }
          }
      }
  `)




  const headerMenu = menu.strapiNvigationMenu.Header_Menu;
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: !activeMenu ? 'auto' : 'hidden',
    }}>
      <Header func={() => setActiveMenu(!activeMenu)}>

        <nav className={classes.navMenu} style={{
          transform: `translateX(${activeMenu ? '0' : '-100%'})`,
          transition: `.3s`,
        }}>
          <div className={`container row ${classes.listPage_navMenu}`}>
            <ul >

              {
                headerMenu ?
                  headerMenu.map(li => (
                    <li className={classes.navLink} key={li.id}>
                      <Link to={li.Link_Page}>{reactStringReplace(li.Name_Page, '&', (match, i)=>(
                        <span>&</span>

                      ))}</Link>

                        {
                          li.Submenu && li.Submenu.length > 0 ? (
                            <ul className={classes.submenuList}>
                              {
                                li.Submenu.map(item =>(
                                  <li><Link className={classes.secondLink} to={item.Link}>{item.Name_Submenu}</Link></li>
                                ))
                              }
                            </ul>
                            ) : null

                        }



                    </li>
                  )) : null
              }
            </ul>

          </div>
        </nav>
      </Header>
        <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
