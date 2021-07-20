import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

function Post_test() {
  return (
    <div className="Post">
      <div className="post__avatar">
        <Avatar src="kjjk" alt="img"></Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>SAndip Sah</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post_test;
