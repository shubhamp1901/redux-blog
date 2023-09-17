import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

const SingleblogPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate()

  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === blogId)
  );

  if (!blog) {
    return (
      <section>
        <h2>Blog not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="blog-excerpt" style={{marginTop: '1rem'}}>
        <h2>{blog.title}</h2>
        <p className="blog-content">{blog.content}</p>
        <Link to={`/editBlog/${blog.id}`} className="button" style={{textDecoration: 'none'}}>
          Edit Blog
        </Link>
        <button className='button button-font' style={{backgroundColor: '#15803d', marginLeft: '10px'}} type="button" onClick={() => navigate("/")}>
          Go To Home
        </button>
      </article>
    </section>
  );
};

export default SingleblogPage;
