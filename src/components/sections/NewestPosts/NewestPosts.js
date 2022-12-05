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

let twoPostsInRow = [];

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
              allPosts.map((post, allPostsIndex) => {
                const id = post.id;
                const title = post.title;
                const uri = post.uri;
                const categories = post.categories.nodes;

                const dateOptions = { year: 'numeric', month: '2-digit', day: 'numeric' };
                const date = new Date(post.date).toLocaleDateString('pl-PL', dateOptions).replaceAll('-', '.');
                
                if (allPostsIndex + 1 > skip && allPostsIndex + 1 <= newestPostsNumber + skip){

                  let excerpt = '';
                  let colClasses = '';

                  if (layout === 'withExcerpt') {
                    excerpt = post.ACFpostExcerpt.postExcerpt;
                    
                    return(
                      <Row>
                        <Col classes="col-lg-2"></Col>
                        <Col classes='col-lg-8'>
                          <PostBox id={id} title={title} excerpt={excerpt} uri={uri} date={date} categories={categories}></PostBox>
                        </Col>
                        <Col classes="col-lg-2"></Col>
                      </Row>
                    )
                  }

                  
                  if (layout === 'withoutExcerpt') {
                    if (allPostsIndex % 2 == 0 || allPostsIndex === 0){
                      twoPostsInRow.push(
                        {
                          index: allPostsIndex,
                          id: id,
                          title: title,
                          uri: uri,
                          date: date,
                          categories: categories
                        }
                        // <PostBox id={id} title={title} uri={uri} date={date} categories={categories}></PostBox>
                      )
                      return(
                        <>
                          <PostBox id={id} title={title} uri={uri} date={date} categories={categories}/>
                          <pre>{JSON.stringify(twoPostsInRow, null, 2)}</pre>                        
                        </>
                      )
                    }
                    if (allPostsIndex % 2 != 0){
                      twoPostsInRow.push(
                        {
                          index: allPostsIndex,
                          id: id,
                          title: title,
                          uri: uri,
                          date: date,
                          categories: categories
                        }
                      )
                      return(
                          // <pre>{JSON.stringify(twoPostsInRow, null, 2)}</pre>                        

                        twoPostsInRow.map((postInRow) => {
                          <>
                            <PostBox id={postInRow.id} title={postInRow.title} uri={postInRow.uri} date={postInRow.date} categories={postInRow.categories}/>
                            <pre>{JSON.stringify(twoPostsInRow, null, 2)}</pre>                        
                          </>
                        })
                      )
                      twoPostsInRow = [];
                    }
                    

                    // if (allPostsIndex % 2 !== 0 && allPostsIndex !== 0){
                    //   return(
                    //     <Row>
                    //       <Col classes="col-lg-2"></Col>
                    //       {
                    //         twoPostsInRow.map((postInRow, indexTwoPostsInRow) => {
                    //           return(
                    //             { postInRow }
                    //           )
                    //         })
                    //       }
                    //       <Col classes="col-lg-2"></Col>
                    //     </Row>
                    //   )
                    // }
                      // if (allPostsIndex % 2){
                      //   return(
                      //     <>
                      //       <Col classes="col-lg-2"></Col>
                      //       <Col classes='col-lg-4'>   
                      //         <PostBox id={id} title={title} uri={uri} date={date} categories={categories}></PostBox>
                      //       </Col> 
                      //     </>
                      //   )
                      // } else {
                        // return(
                        //   <>
                        //     <Col classes='col-lg-4'>   
                        //       <PostBox id={id} title={title} uri={uri} date={date} categories={categories}></PostBox>
                        //     </Col>
                        //     <Col classes="col-lg-2"></Col>
                        //   </>
                        // )
                    

                    
                  }
                }
              })
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