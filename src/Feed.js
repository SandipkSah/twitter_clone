import React, { useState, useEffect }  from "react";
import './Feed.css'
import TweetBox from './TweetBox.js'
import Post from "./Post"

function Feed() {
  return <div className="feed">
  <div className="feed__header">
    <h2>Home</h2>
  </div>

  <TweetBox />
  {/* <Post></Post> */}
{/* 
  <FlipMove>
    {posts.map((post) => (
      <Post
        key={post.text}
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
      />
    ))}
  </FlipMove> */}
  <Post
            key="{post.text}"
            displayName="{post.displayName}"
            username="{post.username}"
            verified="{post.verified}"
            text="{post.text}"
            avatar="{post.avatar}"
            image="{post.image}"
          />
</div>;
}

export default Feed;
