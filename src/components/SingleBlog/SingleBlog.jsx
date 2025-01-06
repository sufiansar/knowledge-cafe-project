import { IoBookmark } from "react-icons/io5";

const SingleBlog = ({ seblog, handleBookMark, handleSpentTime }) => {
  const {
    title,
    cover,
    author_img,
    author_name,
    posted_date,
    reading_time,
    hashtags,
    status,
    id,
  } = seblog;

  return (
    <div className="mb-20 m-4">
      <img className="w-full rounded-2xl " src={cover} alt="hhh" />
      <div className="mt-8 md:flex justify-between md:w-[845px]">
        <div className="md:flex ">
          <img className="w-16" src={author_img} alt="g" />
          <div className="md:ml-5">
            <h3 className="text-xl font-bold mt-4">{author_name}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="">
          <span> {reading_time} min read</span>
          <button onClick={() => handleBookMark(seblog)} className="ml-2">
            <IoBookmark />
          </button>
        </div>
      </div>

      <h1 className="text-2xl font-bold mt-5">{title}</h1>
      <h2 className="mt-4 ">{hashtags}</h2>
      <button
        onClick={() => handleSpentTime(id, reading_time)}
        className="btn btn-primary mt-4 text-xl font-bold "
      >
        {status}
      </button>
    </div>
  );
};

export default SingleBlog;
