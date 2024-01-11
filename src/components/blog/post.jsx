import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import "./post.css";
import {motion as m} from 'framer-motion'
import Reveal from '../reveal';
export default function Post({img,ttl,dsc ,mln=4 ,id}) {
  const history = useHistory();
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = (e) => {
    e.preventDefault();
    setLikeCount(likeCount + 1);
  };

  const handleDislike = (e) => {
    e.preventDefault(); a
    setDislikeCount(dislikeCount + 1);
  };
  const postContentStyle = {
    WebkitLineClamp: mln,
  };
  const handleDoubleClick = () => {
    // Navigate to the specified page when double-clicked
    history.push(`/blog/singlepost/${id}`);
  };
  return (
    
    
    <m.div
      onDoubleClick={handleDoubleClick}
  //  initial={{y:"100%"}}
 animate={{y:"0%"}}
  // transition={{duration:0.75,ease:"easeOut"}}
  // exit={{ opacity:1}} 
  className="post">
      {/* <img
        className="postImg"
        src={img}
        alt=""
      /> */}
      <Reveal>
      
        {img && <img className="postImg" src={img} draggable="false" alt="" />}
        </Reveal>
        <Reveal>
      <div className="postInfo">
       <span className="postTitle">{ttl}</span>
      </div>
      </Reveal>
      <Reveal>
      <p className="postDesc" style={postContentStyle}>{dsc}</p>
      </Reveal>
      <Reveal>
      <div className="fin">
      <Link to={`/blog/singlepost/${id}`}>
            <span className='r-m-b'>Read more</span>
          </Link>
      <span className="postDate">1 hour ago</span>
      <div className="like-dislike-buttons">
          <span role="img" aria-label="Like" onClick={handleLike} className="like-count">
                        &#x1F44D; {likeCount}
                  </span>
         <        span role="img" aria-label="Dislike" onClick={handleDislike} className="dislike-count">
  &#x1F44E; {dislikeCount}
</span>
        </div>
        </div>
        </Reveal>
    </m.div>
   
  );
}