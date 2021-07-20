import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "XXXXX",
      username: "User",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tSpIZxs5zgUxAnhEZ45YzdUpC4SJzXLJen5MNn2m34tEHIDZt8VIdKAvekRxqc_4kG4&usqp=CAU",
        // "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;





// import React from "react";
// import { Avatar, Button } from "@material-ui/core";
// import "./TweetBox.css";

// function TweetBox() {
//   return (
//     <div className="tweetBox">
//       <form>
//         <div className="tweetBox__input">
//           <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
//           <input
//             onChange={(e) => setTweetMessage(e.target.value)}
//             value={tweetMessage}
//             placeholder="What's happening?"
//             type="text"
//           />
//         </div>
//         <input
//           value={tweetImage}
//           onChange={(e) => setTweetImage(e.target.value)}
//           className="tweetBox__imageInput"
//           placeholder="Optional: Enter image URL"
//           type="text"
//         />

//         <Button
//           onClick={sendTweet}
//           type="submit"
//           className="tweetBox__tweetButton"
//         >
//           Tweet
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default TweetBox;
