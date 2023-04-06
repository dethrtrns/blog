import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, Collapse } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
}));

export default function ImageCard({ post, checked }) {
  const classes = useStyles();

  return (
    <Collapse
      in={checked}
      {...(checked ? { timeout: 1000 } : {})}>
      <Card
        square
        className={classes.root}>
        <CardActionArea href='/home'>
          <CardMedia
            className={classes.media}
            image={post.image}
            title={post.category}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='h1'
              className={classes.title}>
              {post.title}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
              className={classes.desc}>
              {post.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Collapse>
  );
}
