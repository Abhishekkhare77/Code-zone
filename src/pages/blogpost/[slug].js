import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const slug = (props) => {
   //Step 1: find the file responding to the slug
   //Step 2: Populate them
   const [blog,setblog] = useState(props.myblog)
   const router = useRouter();
   useEffect(()=>{
     if(!router.isReady) return
     const {slug} =router.query;
     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{return a.json()}).then((parsed)=>{
       setblog(parsed)
      })
    },[router.isReady])
  return (
    <div className='flex items-center justify-center flex-col m-5 px-28'>
      <h3 className='text-2xl font-bold my-6'>{blog && blog.title}</h3>
      <p>{blog && blog.content}</p>
    </div>
  )
}
export async function getServerSideProps(context) {
  const {slug} = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myblog = await data.json()
  return {
    props: {myblog}, // will be passed to the page component as props
  }
}
export default slug
