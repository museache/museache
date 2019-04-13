import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';


const SiteLogo = styled.img`
  height: 30px;
  width: 30px;
  filter: invert(1);
`

const Logo = () => (
    <StaticQuery query={
        graphql`
        {
          allWordpressWpLogo {
            edges {
              node {
                wordpress_id
                url {
                  source_url
                }
              }
            }
          }
        }
    `} render={props => (
      <SiteLogo src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="Thumbnail"/>
    )}/>
);

export default Logo;