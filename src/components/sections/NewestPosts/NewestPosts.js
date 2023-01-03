import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {Container, Row, Col} from '../../structure/Grid/Grid';
import PostBox from '../../partials/PostBox/PostBox';

const NewestPosts = ({data}) => {

  const newestPostsNumber = data.newestPostsNumber;
  const skip = data.skip;
  const layout = data.layout;
  const sectionsHeading = data.sectionsHeading

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
              <h2>{sectionsHeading}</h2>
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
                const date = post.date;
                
                if (allPostsIndex + 1 > skip && allPostsIndex + 1 <= newestPostsNumber + skip){

                  let excerpt = '';

                  if (layout === 'withExcerpt') {
                    excerpt = post.ACFpostExcerpt.postExcerpt;
                    
                    return(
                      <>
                        <Row>
                          <Col classes="col-lg-3">
                            <Col classes="col-lg-2">ss</Col>
                            <Col classes="col-lg-2">dd</Col>
                          </Col>
                        </Row>
                        <Row>
                          <Col classes="col-lg-2"></Col>
                          <Col classes="col-lg-6">
                            <Row>
                              <Col classes="col-lg-6">
                                sss
                              </Col>
                              <Col classes="col-lg-6">
                                sss
                              </Col>    
                            </Row>
                            {/* <PostBox key={id} id={id} title={title} excerpt={excerpt} uri={uri} date={date} categories={categories}></PostBox> */}
                          </Col>
                          <Col classes="col-lg-2"></Col>
                        </Row>
                      </>
                    )
                  }
                  
                  if (layout === 'withoutExcerpt') {
                    var a = allPostsIndex-skip;
                    if (a % 2 === 0){
                      twoPostsInRow = new Array()
                      
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
                        <>
                        </>
                      )
                    }
                    if (allPostsIndex-skip % 2 !== 0){
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
                          <Row>
                            <Col classes="col col-xl-2"></Col>
                            { twoPostsInRow.map((postInRow, twoPostsInRowIndex) => {
                              if (twoPostsInRowIndex % 2 === 0){
                                return(
                                  <>
                                    <Col classes="col col-xl-3">
                                      <PostBox key={postInRow.id} id={postInRow.id} title={postInRow.title} uri={postInRow.uri} date={postInRow.date} categories={postInRow.categories}/>
                                    </Col>
                                    <Col classes="col col-xl-1"></Col>
                                  </>
                                ) 
                              }
                              if (twoPostsInRowIndex % 2 !== 0){
                                return(
                                  <>
                                    <Col classes="col col-xl-1"></Col>
                                    <Col classes="col col-xl-3">
                                      <PostBox key={postInRow.id} id={postInRow.id} title={postInRow.title} uri={postInRow.uri} date={postInRow.date} categories={postInRow.categories}/>
                                    </Col>
                                  </>
                                ) 
                              }
                              
                            })
                            }
                            <Col classes="col col-xl-2"></Col>
                          </Row>
                      )
                    }
                  }
                }
              })
            }
      </Container>
    </section>
  )
};

export default NewestPosts

export const postQuery = graphql`
  fragment NewestpostsFragmentPost on WPGraphQL_Post_Acfcontentsections_Sections_Newestposts{
    sectionsHeading
    newestPostsNumber
    skip
    layout
  }
`;
export const pageQuery = graphql`
  fragment NewestpostsFragmentPage on WPGraphQL_Page_Acfcontentsections_Sections_Newestposts{
    sectionsHeading
    newestPostsNumber
    skip
    layout
  }
`;