import React, {useState, useEffect} from 'react'
import styles from "../../styles/Blogpost.module.css"

const PostSlug = (props) => {

  function createMarkup(content) {
    return {__html: content};
  }

  const [blogpost, setBlogpost] = useState(props.myblog)

  return (
    <div className={styles.mainDiv}>
      <h1>{blogpost?.title}</h1>
      <div dangerouslySetInnerHTML={createMarkup(blogpost?.content)}/>
      {/* <p>{blogpost?.content}</p> */}
    </div>
  )
}

// Server Side Rendering Code
export async function getServerSideProps(context) {
  const { slug } = context.query
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myblog = await data.json();

  return { props: { myblog } }
}

// Static Site Generation Code
// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: 'how-to-learn-flask' } },
//       { params: { slug: 'how-to-learn-java' } },
//       { params: { slug: 'how-to-learn-javascript' } },
//       { params: { slug: 'how-to-learn-nextjs' } },
//       { params: { slug: 'how-to-learn-python' } },
//     ],
//     fallback: false }
// }

// export async function getStaticProps(context) {
//   const { slug } = context.params;

//   let myblog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8")

//   return { 
//     props: {myblog: JSON.parse(myblog)},
//    }
// }


export default PostSlug