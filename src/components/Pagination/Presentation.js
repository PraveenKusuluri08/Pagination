import React from "react"
import Pagination from "@material-ui/lab/Pagination"
const Presentation = (props) => {
  const { posts, totalPages, pagesRequired, pagination } = props
  const pages = []
  for (var i = 1; i <= Math.ceil(totalPages / pagesRequired); i++) {
    pages.push(i)
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

      <ul className="pagination">
        {pages.map((item) => (
          <li key={item} className="page-item">
            <a onClick={() => pagination(item)} href="#" className="page-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Presentation
