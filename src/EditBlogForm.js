import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { blogUpdated } from './store/blogsSlice'

export const EditBlogForm = () => {
  const { blogId } = useParams()

  const blog = useSelector(state =>
    state.blogs.find(blog => blog.id === blogId)
  )

  const [title, setTitle] = useState(blog.title)
  const [content, setContent] = useState(blog.content)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSaveblogClicked = () => {
    if (title && content) {
      dispatch(blogUpdated({ id: blogId, title, content }))
      navigate(`/blogs/${blogId}`)
    }
  }

  return (
    <section>
      <h2>Edit Blog</h2>
      <form>
        <label htmlFor="blogTitle">Blog Title:</label>
        <input
          type="text"
          id="blogTitle"
          name="blogTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="blogContent">Content:</label>
        <textarea
          id="blogContent"
          name="blogContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button className='button button-font' type="button" onClick={onSaveblogClicked}>
        Update Blog
      </button>
      <button className='button button-font' style={{backgroundColor: '#15803d', marginLeft: '10px'}} type="button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </section>
  )
}