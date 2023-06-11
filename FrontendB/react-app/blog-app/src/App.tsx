import React, { useState, useEffect } from 'react';
import './App.css';
import BlogPosts from './BlogPosts';
import { PostDTO } from './api/models/PostDTO';
import BlogPostForm from './BlogPostForm';
import BlogCard from './BlogCard';
import Popup from './Popup';
function App() {
  const [blogPosts, setBlogPosts] = useState<PostDTO[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const fetchBlogPosts = () => {
    fetch("http://localhost:3000/post")
      .then(response => response.json())
      .then(data => setBlogPosts(data.posts)) // assuming the array is stored in a property called posts
      .catch(error => console.log(error));
  }
    useEffect(() => {
        fetchBlogPosts();
      }, []);      
  const Name = 'My Friends';
  const onFormSubmit = (post: PostDTO) => {
    fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(() => fetchBlogPosts())
        .catch(error => console.log(error));
 }

  return (
    <div className='App'>
      <header className='App-header'>{Name + "' Personal Travel Blogs"}</header>
      <body className='App-body'>
        <BlogCard togglePopup={togglePopup}/>
        {showPopup && <Popup text="Excited to Explore?!" togglePopup={togglePopup}/>}
        <BlogPostForm onPostSubmit={onFormSubmit} />
        {blogPosts === null ? (
          <div>Loading...</div>
        ) : (
          <BlogPosts blogPosts={blogPosts} />
        )}
      </body>
    </div>
  );
}

export default App;
