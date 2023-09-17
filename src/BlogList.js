import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { deleteBlog } from "./store/blogsSlice";
import { BlogAuthor } from "./BlogAuthor";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch()
  

  const renderedblogs = blogs.map((blog) => (
    <article className="blog-excerpt" style={{backgroundColor: '#fff'}} key={blog.id}>
      <h3>{blog.title}</h3>
      <div style={{marginTop: '10px', fontWeight: 'lighter', fontStyle: 'italic'}}>
        <BlogAuthor userId={blog.user} />
        <p style={{color: "#333", fontSize: '12px', fontStyle: 'italic'}}>{blog.date}</p>
      </div>
      <p className="blog-content">{blog.content.substring(0, 100)}</p>
      
      
      <Link to={`/blogs/${blog.id}`} className="button" style={{textDecoration: 'none'}}>
        View Blog
      </Link>
      <button className="button button-font" style={{marginLeft: '10px', backgroundColor: 'red', marginTop: '5px', border: 'none', padding: '13px'}} onClick={() => dispatch(deleteBlog({id: blog.id}))}>
        Delete Blog
      </button>
    </article>
  ));

  return (
    <section className="blogs-list" style={{maxHeight: '420px', overflowY: 'scroll', marginTop: '1rem', borderRadius: '10px', backgroundColor: '#f3f4f6'}}>
      {blogs.length > 0 ? <h2>Blogs ({blogs.length})</h2> : ""}
      {renderedblogs}
    </section>
  );
};

export default BlogList;
