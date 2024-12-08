import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {

    const [blog, setBlog]=useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>Blog</div>
    );
}

export default Blog;