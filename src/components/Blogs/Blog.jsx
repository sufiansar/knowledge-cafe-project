import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = ({ handleBookMark, handleSpentTime }) => {
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div className="w-2/3">
      <h1></h1>
      {blogs.map((blog) => (
        <SingleBlog
          key={blog.id}
          seblog={blog}
          handleBookMark={handleBookMark}
          handleSpentTime={handleSpentTime}
        ></SingleBlog>
      ))}
    </div>
  );
};

export default Blog;
