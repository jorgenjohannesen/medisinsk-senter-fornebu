import React from 'react'

const Card = ({ post }) => {
  if (!post) return null

  return (
    <div className="card">
      <h3>{post.title}</h3>
      {post.mainImage && post.mainImage.asset && (
        <img src={post.mainImage.asset.url} alt={post.title} />
      )}
      <p>{post.excerpt}</p>
      {/* Add more post details here as needed */}
    </div>
  )
}

export default Card
