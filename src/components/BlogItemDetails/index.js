// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetailsFromSerer()
  }

  getBlogItemDetailsFromSerer = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogItemData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = blogItemData => {
    const {title, imageUrl, avatarUrl, author, content} = blogItemData

    return (
      <div className="BlogItemDetails-container">
        <h1 className="title">{title}</h1>
        <div className="auth-details">
          <img src={avatarUrl} alt={author} className="author-img" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="image" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {blogItemData, isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bff" width={50} height={50} />
          </div>
        ) : (
          this.renderBlogItemDetails(blogItemData)
        )}
      </div>
    )
  }
}
export default BlogItemDetails
