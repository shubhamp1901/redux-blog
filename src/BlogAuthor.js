import React from 'react'
import { useSelector } from 'react-redux'

export const BlogAuthor = ({ userId }) => {
  const author = useSelector(state =>
    state.users.find(user => user.id === userId)
  )

  return <span style={{textDecoration: 'underline'}}>by {author ? author.name : 'Unknown author'}</span>
}

// style={{marginTop: '10px', fontWeight: 'lighter', fontStyle: 'italic'}}