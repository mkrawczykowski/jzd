import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from '../../structure/Grid/Grid';
import PostBox from '../../partials/PostBox/PostBox';
// import * as styles from './NewestPosts.module.scss';

const NewestPosts = ({data}) => {

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
            <Col classes="col-lg-1"></Col>
            <Col classes="col-lg-10">
              <h3>{sectionsHeading}</h3>
            </Col>
            <Col classes="col-lg-1"></Col>
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
                const categories = post.categories.nodes;

                const dateOptions = { year: 'numeric', month: '2-digit', day: 'numeric' };
                const date = new Date(post.date).toLocaleDateString('pl-PL', dateOptions).replaceAll('-', '.');
                
                
                if (index + 1 > skip && index + 1 <= newestPostsNumber + skip){

                    let excerpt = '';
                    let colClasses = '';

                    if (layout === 'withExcerpt') {
                      excerpt = post.ACFpostExcerpt.postExcerpt;

                      return(
                        <>
                          <Col classes="col-lg-2"></Col>
                          <Col classes={'col-lg-8'}>
                            <PostBox id={id} title={title} excerpt={excerpt} uri={uri} date={date} categories={categories}></PostBox>
                          </Col>
                          <Col classes="col-lg-2"></Col>
                        </>
                      )
                      
                    }
                    if (layout === 'withoutExcerpt') {
                      colClasses = 'col-lg-5';

                      return(
                        <>
                          {index % 2 ? <Col classes="col-lg-2"></Col> : null}
                          <Col classes={'col-lg-4'}>
                            <PostBox id={id} title={title} excerpt={excerpt} uri={uri} date={date} categories={categories}></PostBox>
                          </Col>
                          {index % 2 ? null : <Col classes="col-lg-2"></Col>}
                        </>
                      )
                    }
                }
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