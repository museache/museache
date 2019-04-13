import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

const WorkItemWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const WorkItem = styled.div`
  width: 320px;
  border: 1px solid #EFEFEF;
  padding: 0.5rem;
  margin: 0.5rem;
`

const WorkImage = styled.img`
  max-width: 100%;
`

const WorkItems = () => {
    return (
        <StaticQuery query={graphql`
        {
            allWordpressWpWork {
              edges {
                node {
                  id
                  title
                  slug
                  excerpt
                  content
                  featured_media {
                    source_url
                  }
                  acf {
                    work_cta
                  }
                }
              }
            }
          }
        `} render={props => (
          <WorkItemWrapper>
            {props.allWordpressWpWork.edges.map(workItem => (
            <WorkItem key={workItem.node.id}>
              <WorkImage src={workItem.node.featured_media.source_url} alt="Thumbnail"/>
              <div dangerouslySetInnerHTML={{__html:workItem.node.title}}/>
              <Link to={`/work/${workItem.node.slug}`}>{workItem.node.acf.work_cta}</Link>
            </WorkItem>
            ))}
          </WorkItemWrapper>)} />
    )
}

export default WorkItems;