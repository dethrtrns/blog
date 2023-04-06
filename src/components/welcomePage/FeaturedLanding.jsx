import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import { useWindowPosition } from "../../helper/hook/useWindowPosition";
import { Grid, Typography } from "@material-ui/core";
import { getFeaturedPosts } from "../../helper/database/fakePostsDB";
// card-type-titles->(Stories, Poetries, write-ups, Who am I? )

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    fontFamily: "Nunito",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  title: {
    fontFamily: "Nunito",
    color: "#fff",
  },
}));

export default function FeaturedLanding() {
  const classes = useStyles();
  const checked = useWindowPosition("header");

  const featured = getFeaturedPosts();

  return (
    <div
      className={classes.root}
      id='place-to-visit'>
      <Grid
        container
        className={classes.root}>
        <Grid
          item
          lg={12}>
          <Typography
            className={classes.title}
            variant='h1'
            align='center'>
            Featured Posts
          </Typography>
        </Grid>
        {featured.map((post) => (
          <Grid item>
            <ImageCard
              post={post}
              checked={checked}
            />
          </Grid>
        ))}
        <Grid item>
          {/* <ImageCard
            place={places[0]}
            checked={checked}
          /> */}
        </Grid>
        <Grid
          item
          lg={12}>
          <Typography
            className={classes.title}
            variant='h1'
            align='center'>
            About ME!
          </Typography>
        </Grid>
        <Grid item>
          <ImageCard
            post={{
              title: "Welcome to My Zone",
              image: "./bgUnsplash.jpg",
              category: "Author",
              description:
                "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
            }}
            checked={checked}
          />
        </Grid>
        {/* <Grid item>
          <ImageCard place={places[0]} checked={checked} />
        </Grid> */}
      </Grid>
    </div>
  );
}
