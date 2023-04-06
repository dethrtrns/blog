import React from "react";
import PropTypes from "prop-types";
import {
  getAllPostsFull,
  getAllPostsLite,
  getPost,
} from "./../../helper/database/fakePostsDB";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Markdown from "./Markdown";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;

  // console.log(getAllPostsFull());
  // console.log(getAllPostsLite());
  // console.log(getPost("0002"));

  return (
    <Grid item xs={12} md={8}>
      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>
      <Divider light />
      {posts.map((post) => (
        <Box>
          <Typography variant='h4' gutterBottom>
            {post.title}
          </Typography>
          <Divider variant='middle' />
          <Markdown className={classes.markdown} key={post.id}>
            {post.description}
          </Markdown>
        </Box>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
