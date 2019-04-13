import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const FeaturedImage = styled.img`
  display: block;
  width: 100%;
  max-width: 640px;
  margin: 1rem 0;
`

export default ({pageContext}) => (
    <Layout>
      <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
      <FeaturedImage src={pageContext.featured_media.source_url}/>
      <p dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Layout>
);