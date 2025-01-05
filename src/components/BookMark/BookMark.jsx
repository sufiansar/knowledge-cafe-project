const BookMark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="m-4 bg-gray-200 p-4 rounded-xl">
      <h1>{title}</h1>
    </div>
  );
};

export default BookMark;
