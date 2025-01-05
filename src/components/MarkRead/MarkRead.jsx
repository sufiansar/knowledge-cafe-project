import BookMark from "../BookMark/BookMark";

const MarkRead = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 border-2 solid-gray m-4">
      <div>
        <h1>Spent time on read: {readingTime}</h1>
      </div>
      <h1 className="m-4 md:text-3xl font-bold bg-gray-200 p-4 rounded-xl">
        Bookmarked Blogs : {bookmarks.length}
      </h1>
      {/* <h1>{handleSpentTime}</h1> */}
      {bookmarks.map((bookmark) => (
        <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>
      ))}
    </div>
  );
};

export default MarkRead;
