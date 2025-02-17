// PostDetails.jsx
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function PostDetails() {
  const { postId } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    // Fetch post by ID from API
    const mockPost = {
      id: postId,
      title: `Post ${postId}`,
      content: 'Full post content...',
      author: 'Author Name',
      date: '2025-02-13'
    }
    setPost(mockPost)
  }, [postId])

  if (!post) return <div>Loading...</div>

  return (
    <article className="post-detail">
      <h1>{post.title}</h1>
      <div className="post-meta">
        <span>By {post.author}</span>
        <span> • </span>
        <time>{post.date}</time>
      </div>
      <div className="post-content">
        {post.content}
      </div>
    </article>
  )
}
