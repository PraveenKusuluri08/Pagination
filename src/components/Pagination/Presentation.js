import React from "react"

const Presentation = (props) => {
 const {posts,totalPage,pagesRequired,pagination} = props
const pages=[]
 for(var i=1;i<Math.ceil(totalPage/pagesRequired);i++){
   pages.push(i);
 }
  return (
    <div>
     <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <mark>{post.id}</mark>-{post.title}
          </li>
        ))}
      </ul>

      <div className="rounded-circle">
        <ul className="pagination">
          {pages.map((nums) => (
            <li key={nums} className="page-item ">
              <a onClick={pagination} href="paginate" className="page-link">
                {nums}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Presentation
