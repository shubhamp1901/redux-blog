import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: nanoid(), date: new Date().toDateString(), title: "Blog One", content: "Blog One", user: "1"},
    { id: nanoid(), date: new Date().toDateString(), title: "Blog Two", content: "Blog Two", user: "2" },
];

const blogsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    blogAdded: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toDateString(),
            title,
            content,
            user: userId,
          },
        };
      },
    },
    deleteBlog(state, action) {
      const {id} = action.payload
      return state.filter((post) => post.id !== id)
    },
    blogUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existPost = state.find((post) => post.id === id);
      if (existPost) {
        existPost.title = title;
        existPost.content = content;
      }
    },
  },
});

export const { blogAdded, blogUpdated, deleteBlog } = blogsSlice.actions;

export default blogsSlice.reducer;
