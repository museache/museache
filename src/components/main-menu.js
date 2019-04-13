import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';
import SiteInfo from './site-info';

const MainMenuWrapper = styled.div`
  display: flex;
  background: rgb(3, 27, 77);
  padding: 1rem 0;
`

const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 8px 16px;
  text-decoration: none;
`

const MainMenuInner = styled.div`
  max-width: 640px;
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-content: center;
  align-items: center;
`

const MainMenu = () =>(
    <StaticQuery query={
        graphql`
        {
            allWordpressWpApiMenusMenusItems(filter:{
                name: {
                eq: "Main Menu"
                }
            }) {
            edges {
              node {
                items {
                  title
                  object_slug
                }
              }
            }
          }
        }
        `} render={props =>(
          <MainMenuWrapper>
            <MainMenuInner>
            <SiteInfo />
              {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                  <MenuItem to={item.object_slug} key={item.title}>
                      {item.title}
                  </MenuItem> 
              ))}
              </MainMenuInner>
          </MainMenuWrapper>
        )}/>
);

export default MainMenu;