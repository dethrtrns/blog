import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ModeContext from "../../../../store/dark-mode-context";
import { useContext } from "react";
import Content from "./Content";
import Media from "./Media";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { purple } from "@material-ui/core/colors";
import ActionCollapse from "./ActionCollapse";
import { CardActionArea } from "@material-ui/core";

export default function CardSinglePost(props) {
  const { post, bgImage, display } = props;
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
    document.getElementById(post.id).scrollIntoView();
  };
  let direction = display === "odd" ? "row" : "row-reverse";
  if (expanded) {
    direction = "column";
  }
  const useStyles = makeStyles((theme) => ({
    card: {
      display: "flex",
      flexDirection: direction,
      // background: "none",
    },
    avatar: {
      backgroundColor: purple[600],
    },
    header: {
      padding: 0,
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.standard,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  }));
  const classes = useStyles();

  return (
    <Grid
      id={post.id}
      item
      xs={12}>
      <CardActionArea>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar
              aria-label={post.category}
              variant='circular'
              src={post.image}
              className={classes.avatar}
            />
          }
          // action={
          //   <IconButton aria-label='settings'>
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={post.title}
          titleTypographyProps={({ component: "h2" }, { variant: "h5" })}
          subheader={post.date}
          subheaderTypographyProps={
            ({ component: "subtitle1" }, { color: "secondary" })
          }
        />
      </CardActionArea>
      <Card className={classes.card}>
        <Media
          post={post}
          expanded={expanded}
        />
        <Content
          post={post}
          bgImage={bgImage}
          expanded={expanded}
          handleExpandClick={handleExpandClick}
        />
      </Card>
      {/* <ActionCollapse post={post} /> */}
    </Grid>
  );
}

CardSinglePost.propTypes = {
  post: PropTypes.object,
};
