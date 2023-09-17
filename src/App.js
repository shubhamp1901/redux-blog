import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Navbar } from "./components/Navbar";
import Heading from "./components/Heading";
import SinglePostPage from "./SingleBlogPage";
import {EditBlogForm} from './EditBlogForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Heading />}
          />
          <Route exact path="/blogs/:blogId" element={<SinglePostPage />} />
          <Route exact path="/editBlog/:blogId" element={<EditBlogForm />} />
          {/* <Navigate to="/" /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
