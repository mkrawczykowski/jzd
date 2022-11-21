import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Container from '../../structure/Container/Container';
import PostBox from '../../partials/PostBox/PostBox';
import * as styles from './NewestPosts.module.scss';


const NewestPosts = ({ data }) => {

  const newestPostsNumber = data.newestPostsNumber;
  const skip = data.skip;
  const layout = data.layout;

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
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col1}><div className={styles.test}>aaaaaa</div></div>
          <div className={styles.col6}>
            <div className={styles.test}>
              {
                allPosts.map((post, index) => {
                  const id = post.id;
                  const title = post.title;
                  const excerpt = post.excerpt;
                  const uri = post.uri;
                  const date = post.date;
                  const categories = post.categories.nodes;
                  // return categories;
                  return index + 1 > skip && index + 1 <= newestPostsNumber + skip ? <PostBox id={id} title={title} excerpt={excerpt} uri={uri} date={date} categories={categories}></PostBox> : ''
                })
              }
            </div>
          </div>
          <div className={styles.col4}><div className={styles.test}>aaaaaa</div></div>
          <div className={styles.col1}><div className={styles.test}>aaaaaa</div></div>
        </div>
      </div>
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