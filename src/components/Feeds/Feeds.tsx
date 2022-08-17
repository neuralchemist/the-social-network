import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostSkeleton from "./PostSkeleton";
import { FeedsBox } from "./styledComponents";
// custom data
import { posts_data } from './Data/posts_data'



function Feeds() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <FeedsBox>
      {loading
        ? posts_data.map((post, index) => <PostSkeleton key={index} />)
        : posts_data.map((post, index) => <Post key={index} post={post} />)}
    </FeedsBox>
  );
}

export default Feeds;
