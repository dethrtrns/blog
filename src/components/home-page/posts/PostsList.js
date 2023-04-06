import CardSinglePost from "./CardSinglePost";
import { Grid } from "@material-ui/core";
import PostMediaCard from "./PostMediaCard";

export default function PostsList({ posts, bgImage }) {
  return (
    <Grid container spacing={4}>
      {posts.map((post, i) => (
        <CardSinglePost
          key={post.id}
          bgImage={bgImage}
          post={post}
          display={i % 2 === 0 ? "even" : "odd"}
        />
      ))}
      {/* <Grid item xs={12}>
        <CardSinglePost bgImage={bgImage} post={posts[0]} />
      </Grid> */}
    </Grid>
  );
}
