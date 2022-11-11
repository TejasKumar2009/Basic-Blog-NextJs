import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css"

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)

  return (
    <>
      <h1 style={{textAlign: "center", marginTop: "7vh", marginBottom: "1vh"}} >Latest Blogposts</h1>
    <main className={styles.main}>
      <div className={styles.grid}>
        {blogs.map((blog, key)=>{
          return         <a key={key} href={`/blog/${blog.slug}`} className={styles.card}>
          <Link href={`/blog/${blog.slug}`} ><h2>{blog.title} &rarr;</h2></Link>
          <Link href={`/blog/${blog.slug}`} ><p>{blog.description}</p></Link>
        </a>
        })}
      </div>
    </main>
    </>
  );
};

// Server Side Rendering Code
export async function getServerSideProps() {
  let data = await fetch("http://localhost:3000/api/blogs/")
  let allBlogs = await data.json()

  return { props: { allBlogs } }
}

// Static Site Generation Code
// export async function getStaticProps(context) {
//   let data =  await fs.promises.readdir("blogdata")
//   let myfile;
//   let allBlogs = [];
//   for (let index = 0; index < data.length; index++){
//     const item = data[index];
//     myfile = await fs.promises.readFile(("blogdata/" + item), "utf-8")
//     allBlogs.push(JSON.parse(myfile))
//   }

//   return { props: { allBlogs } }
// }


export default Blog;
