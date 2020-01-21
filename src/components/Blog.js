import React    from 'react'
import { blog } from '../data'

const Blog = () => {

  // helper function
  const endsWith = (str, suffix) => {
    return str.indexOf(suffix, str.length - suffix.length) !== -1
  }

  // using the helper function above, find the current entry which has a slug property which ends with the part matching the current url slug
  const currentEntry = blog.filter(item => {
    return endsWith(window.location.pathname, item.slug)
  })

  // dangerouslySetInnerHTML with the content of the currentEntry's bodyHTML property.
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
