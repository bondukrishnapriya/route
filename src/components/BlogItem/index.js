// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, title, author, avatarUrl, topic} = blogData
  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="blog-item-container">
          <img src={imageUrl} className="blog-item-image" alt={`item${id}`} />
          <div className="blog-item-info">
            <p className="blog-item-topic">{topic}</p>
            <h1 className="blog-item-title">{title}</h1>
          </div>
          <div className="author-info">
            <img src={avatarUrl} className="avatar" alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
