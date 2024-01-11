import { Link, useParams, useHistory } from 'react-router-dom';
import React ,{useEffect}from "react"
import "./singlepost.css";
import Posts from "./posts";
import Headerb from "./b-header";
import { postData } from '../data/Data';

export default function Singlepost() {
  
    const { postId } = useParams();
    const history = useHistory();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [postId]);
  //   window.addEventListener('hashchange', handleHashChange);
  
  //   return () => {
  //     window.removeEventListener('hashchange', handleHashChange);
  //   };
  // }, [postId]); 
  const post = postData.find((p) => p.id === parseInt(postId, 10));

  if (!post) {
    return <div>Post not found!</div>;
  }
  const handleBackToBlog = () => {
    // Use history.push instead of Link to navigate programmatically
    history.push('/blog');
  };
  return (
    <>
    
    <div className="sphead">
        <span className="headerTitleSm">welcome to our blog</span>
      </div>
      <button className="backto" type="button" onClick={handleBackToBlog}>
        Back to Blog
      </button>

      <div className="mainContainer">
    
      <div className="singlePostWrapper">
      {post.img && <img className="singlePostImg"  src={post.img} draggable="false" alt="" />}

        
        <h1 className="singlePostTitle">
        {post.ttl}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
             
              {post.Author}
             
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">{post.dsc}</p>
      </div>
      
      <div className="rightSection">
          {/* Add your blog search component here */}
          <div className="blogSearch">
            <h2>Blog Search</h2>
            {/* Search input and button */}
            <div className="searchContainer">
              <input type="text" placeholder="Search Blogs" className="searchInput" />
              <button className="searchButton">Search</button>
            </div>
          </div>

          {/* Add your recent blogs component here */}
          <div className="recentBlogs">
            <h2>Recent Blogs</h2>
            {/* Map through recent blog data and display them */}
            {postData.slice(0, 10).map((recentPost) => (
              <Link key={recentPost.id} to={`/blog/singlepost/${recentPost.id}`} className="recentPostLink">
             <ul>
              <li>
                {recentPost.ttl}
                </li>
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
    <Posts  />
    </>
  );
}