/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import MainMenu from "./main-menu";
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');

  body {
    background-color: #000;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`

const LayoutWrapper = styled.div`
  max-width: 640px;
  margin: 0 auto;
  width: 90%;
`

const Layout = ({children}) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
    
  </div>
)

export default Layout
