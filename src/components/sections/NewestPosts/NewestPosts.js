import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from '../../structure/Grid/Grid';
import PostBox from '../../partials/PostBox/PostBox';
// import * as styles from './NewestPosts.module.scss';

const NewestPosts = ({ data }) => {

  const newestPostsNumber = data.newestPostsNumber;
  const skip = data.skip;
  const layout = data.layout;
  const sectionsHeading = data.sectionsheading

  const postsQuery = useStaticQuery(graphql`
  query{
    wpgraphql {
      posts {
        nodes {
          id
          uri
          title
          ACFpostExcerpt {
            postExcerpt
          }
          date
          categories {
            nodes {
              name
              uri
            }
          }
        }
      }
    }
  }
`)

const allPosts = postsQuery.wpgraphql.posts.nodes;

  return(
    <section>
      <Container>
        { sectionsHeading ? 
          <Row>
            <Col>
              <h3>{sectionsHeading}</h3>
            </Col>
          </Row>
          : null
        }
        {
          <Row>
            {
              allPosts.map((post, index) => {
                const id = post.id;
                const title = post.title;
                const uri = post.uri;
                const date = post.date;
                const categories = post.categories.nodes;
                let excerpt = '';
                let colClasses = '';

                if (layout === 'withExcerpt') {
                  colClasses = '';
                  excerpt = post.ACFpostExcerpt.excerpt;
                }

                if (layout === 'withoutExcerpt') {
                  colClasses = 'col-lg-6';
                }
                
                return index + 1 > skip && index + 1 <= newestPostsNumber + skip ? 
                <Col classes={colClasses}>
                  <PostBox id={id} title={title} excerpt={excerpt} uri={uri} date={date} categories={categories}></PostBox>
                </Col> 
                : null
              })
            }
          </Row> 
        }
      </Container>
    </section>
  )
};

export default NewestPosts

export const query = graphql`
  fragment NewestpostsFragment on WPGraphQL_Page_Acfcontentsections_Sections_Newestposts{
    sectionsheading
    newestPostsNumber
    skip
    layout
  }
`;