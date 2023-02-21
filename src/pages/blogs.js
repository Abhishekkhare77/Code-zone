import React, { useState } from 'react'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component';
const blogs = (props) => {
  console.log(props)
  //Step 1: Collect all the data from blogdata directory
  //Step 2: Iterate through them and display them
 const [blogs,setblogs] = useState(props.allBlogs);
  // useEffect(()=>{
    
  // },[])
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
          <h2 className='text-3xl font-bold p-3'>Blogs</h2>
          {blogs.map((blogitem)=>{
            return <div className="flex flex-col items-center justify-center mx-10 my-4 border border-white rounded p-5" key={blogitem.title}>
              <Link href={`/blogpost/${blogitem.slug}`}><h3 className='font-bold'>{blogitem.title}</h3></Link>
              <p className='w-[45vw]'>{blogitem.content.substr(0,150)}...</p>
            </div>
          })}
        </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blog")
  let allBlogs = await data.json();
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default blogs
