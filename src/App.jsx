import "./App.css";
import Blog from "./components/Blogs/Blog";
import Header from "./components/Header/Header";
import MarkRead from "./components/MarkRead/MarkRead";
import { useState } from "react";

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const handleBookMark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookMarks(newBookMarks);
  };

  // Spent time on read the code and understand the logic
  const [readingTime, setreadingTime] = useState(0);
  const handleSpentTime = (time) => {
    const newTime = readingTime + time;
    setreadingTime(newTime);
  };
  return (
    <>
      <Header></Header>

      <div className="flex mt-10">
        <Blog
          handleBookMark={handleBookMark}
          handleSpentTime={handleSpentTime}
        ></Blog>
        <MarkRead bookmarks={bookmarks} readingTime={readingTime}></MarkRead>
      </div>
    </>
  );
}

export default App;
