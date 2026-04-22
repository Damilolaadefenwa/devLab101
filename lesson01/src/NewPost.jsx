import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { format } from 'date-fns';
import api from './api/posts.js';
import DataContext from "./context/DataContext";


const NewPost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  //This used to be in the destructured Anonimous function as a props before useContext
  const { posts, setPosts } = useContext(DataContext);
  const history = useHistory();

  
  // The Submit Post Operation
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? String(Number(posts[posts.length - 1].id) + 1) : "1";
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`); 
    }
  }

  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPost