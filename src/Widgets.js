import React from "react";
import "./Widgets.css";

import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
      <h2>What's happening</h2>
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            Prince Harry, one of the most talked-about figures in the world, is
            publishing a memoir next year that he calls &quot;wholly
            truthful.&quot;{" "}
            <a href="https://t.co/7yvNORZ2zY">https://t.co/7yvNORZ2zY</a>
          </p>
          &mdash; CNN International (@cnni){" "}
          <a href="https://twitter.com/cnni/status/1417237843794006044?ref_src=twsrc%5Etfw">
            July 19, 2021
          </a>
        </blockquote>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </div>
  );
}

export default Widgets;
