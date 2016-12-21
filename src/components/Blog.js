import React from 'react'

const Blog = (props) => {

  const endsWith = (str, suffix) => {
    return str.indexOf(suffix, str.length - suffix.length) !== -1
  }

  const currentEntry = props.blog.filter(item => {
    return endsWith(window.location.pathname, item.slug)
  })

  const createMarkup = () => {
    return {__html: currentEntry[0].bodyHTML}
  }

  console.log({currentEntry});

  return (
    <article className="body-copy" dangerouslySetInnerHTML={createMarkup()}>
    </article>
  )
}

export default Blog;
