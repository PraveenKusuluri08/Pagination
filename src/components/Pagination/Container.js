import React, { useState, useEffect } from "react"
import Presentation from "./Presentation"
import axios from "axios"
function Container() {
  const [posts, setPosts] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  const [pagesRequired,setpagesRequired]=useState(10)

  useEffect(()=>{
    const fetchData=()=>{
      return axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res)=>{
        setPosts(res.data)
      }).catch((error)=>{
        console.error(error)
      })
    }
    fetchData()
  },[])

  const lastPage =currentPage*pagesRequired 
  const firstPage = lastPage-pagesRequired
  const middle = posts.slice(firstPage,lastPage)
  const totalPage = posts.length
  const pagination = (pages) => {
    setCurrentPage(pages)
  }
  return (
    <div className="container">
      <Presentation
        posts={middle}
        totalPage={totalPage}
        pagesRequired={pagesRequired}
        pagination={pagination}
      />
    </div>
  )
}

export default Container
