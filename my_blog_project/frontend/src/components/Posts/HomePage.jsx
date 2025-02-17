// HomePage.jsx
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch posts from API
    const mockPosts = [
      { id: 1, title: 'First Post', excerpt: 'Lorem ipsum...', author: 'John Doe', date: '2025-02-13' },
      { id: 2, title: 'React Tips', excerpt: 'Best practices...', author: 'Jane Smith', date: '2025-02-12' }
    ]
    setPosts(mockPosts)
  }, [])

  return (
    <div className="home-page">
      <h1>Latest Posts</h1>
      <div className="posts-grid">
        {posts.map(post => (
          <article key={post.id} className="post-card">
            <h2><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
            <p className="meta">By {post.author} • {post.date}</p>
            <p className="excerpt">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}