import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';
import Logo from './logo';

const SiteInfoWrapper = styled.div`
    flex-grow: 1;
    color: white;
    display: flex;
    align-content: center;
    align-items: center;
`

const SiteTitle = styled.div`
    font-weight: bold;
`

const SiteInfo = () => (
    <StaticQuery query={
        graphql`
        {
            allWordpressSiteMetadata {
              edges {
                node {
                  name
                  description
                }
              }
            }
          }
    `} render={props => (
        <SiteInfoWrapper>
            <Logo/>
            <SiteTitle>
                {props.allWordpressSiteMetadata.edges[0].node.name}
            </SiteTitle>
        </SiteInfoWrapper>
    )}/>
);

export default SiteInfo;