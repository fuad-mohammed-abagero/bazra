import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import {postData }    from '../data/Data'
import Post from "./post";
import "./posts.css";

export default function Posts() {
  const location = useLocation();
  const isSinglepostPage = location.pathname.includes('/blog/singlepost');
  const postsClassName = isSinglepostPage ? 'posts-singlepost' : 'posts';
  const titleContent = isSinglepostPage ? 'Related blogs' : 'Recently added blogs';
  const titleClassName = isSinglepostPage ? 'c-singlepost' : 'c';
  

  return (
    <>
    <div className="a">
    
    <h1 className={titleClassName}>{titleContent}</h1>
   
    <div className={postsClassName}>
    
      {postData.map((post, index) => (
         <Link key={post.id} to={`/blog/singlepost/${post.id}`}>
         <Post {...post} />
       </Link>
      ))}
   
      
      </div>
      </div>
      </>
  );
}