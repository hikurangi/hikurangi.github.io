import React from 'react'

// Blog may need to accept a JSX string for each blog entry
// When on the blog route, the URL and the

const Blog = (props) => {
  return (
    <article className="body-copy">
      { props.html }
    </article>
  )
}

export default Blog;
