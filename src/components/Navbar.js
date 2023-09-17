import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h3>React Blogs</h3>
          <div className="navLinks">
            <Link to="/">Home</Link>
          </div>
      </section>
    </nav>
  )
}