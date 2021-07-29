import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

export default function Home() {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');


    // const handleDelete = (id) => {
    //     const newBlog = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlog);
    // }  
    // handleDelete ={handleDelete}

    return(
        <div className="home">

            { error && <div>{error}</div>}
            {!error && isPending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title="" />}
            {/* <button onClick={() => setName(name==='luigi'?'mario':'luigi')}>change name</button> */}
        </div>
    );
}