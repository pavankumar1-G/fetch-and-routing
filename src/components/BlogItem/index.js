// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-item-container">
        <img src={imageUrl} alt={`item${id}`} className="item-image" />
        <div className="item-details-auth-con">
          <div className="item-details">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
          </div>
          <div className="auth-details">
            <img className="avatar-img" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
