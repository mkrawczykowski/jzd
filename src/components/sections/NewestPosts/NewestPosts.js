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
                <h3>{ sectionsHeading }</h3>
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
                const excerpt = post.excerpt;
                const uri = post.uri;
                const date = post.date;
                const categories = post.categories.nodes;
                return index + 1 > skip && index + 1 <= newestPostsNumber + skip ? 
                <Col classes="col-lg-6">
                  <PostBox id={id} title={title} excerpt={excerpt} uri={uri} date={date} categories={categories}></PostBox>
                </Col> 
                : null
              })
            }
          </Row> 
        }
      </Container>
    </section>



    // <section>
    //   <div className={grid.container}>
    //     <div className={grid.row}>
    //       <div className={grid['col-3xl-1']}><div className={grid.test}>aaaaaa</div></div>
    //       <div className={styles['col-3xl-6']}>
    //         <div className={grid.test}>
    //           {
    //             allPosts.map((post, index) => {
    //               const id = post.id;
    //               const title = post.title;
    //               const excerpt = post.excerpt;
    //               const uri = post.uri;
    //               const date = post.date;
    //               const categories = post.categories.nodes;
    //               // return categories;
    //               return index + 1 > skip && index + 1 <= newestPostsNumber + skip ? <PostBox id={id} title={title} excerpt={excerpt} uri={uri} date={date} categories={categories}></PostBox> : ''
    //             })
    //           }
    //         </div>
    //       </div>
    //       <div className={grid['col-3xl-4']}><div className={grid.test}>aaaaaa</div></div>
    //       <div className={grid['col-3xl-1']}><div className={grid.test}>aaaaaa</div></div>
    //     </div>
    //   </div>
    // </section>
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