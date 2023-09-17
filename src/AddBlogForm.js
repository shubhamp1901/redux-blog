import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { blogAdded } from "./store/blogsSlice";

const AddBlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSaveBlogClicked = () => {
    if (title && content) {
      dispatch(blogAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Blog</h2>
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
        <label htmlFor="blogAuthor">Author:</label>
        <select
          id="blogAuthor"
          value={userId}
          onChange={onAuthorChanged}
          style={{
            outline: "none",
            padding: "5px",
            border: "1px solid #dedede",
            borderRadius: "4px",
          }}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="blogContent">Content:</label>
        <textarea
          id="blogContent"
          name="blogContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
          className="button button-font"
          type="button"
          onClick={onSaveBlogClicked}
          disabled={!canSave}
        >
          Save Blog
        </button>
      </form>
    </section>
  );
};

export default AddBlogForm;
