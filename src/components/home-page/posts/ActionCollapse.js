import React from "react";
import ReactMarkdown from "markdown-to-jsx";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Tooltip from "@material-ui/core/Tooltip";
import Markdown from "../Markdown";

const useStyles = makeStyles((theme) => ({
  // card: {
  //   display: "flex",
  //   // flexDirection: "column",
  //   // background: "none",
  // },
  // avatar: {
  //   backgroundColor: purple[600],
  // },
  noPadding: {
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
  close: {
    // width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    margin: "15px",
    marginTop: "0px",
    paddingTop: "0px",
  },
  expandContent: {
    marginBottom: "0px",
    paddingBottom: "0px",
  },
}));

export default function ActionCollapse({ post, expanded, handleExpandClick }) {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <>
      <CardActions className={classes.noPadding}>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <Chip
          variant={expanded ? "default" : "outlined"}
          clickable
          onClick={handleExpandClick}
          label={expanded ? "Close" : "Quick Read"}
          color='primary'
          aria-expanded={expanded}
          aria-label='Quick Read'
          icon={
            <ExpandMoreIcon
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
            />
          }
        />
      </CardActions>
      <Collapse
        in={expanded}
        timeout='auto'
        unmountOnExit>
        <CardContent className={classes.expandContent}>
          {/* <ReactMarkdown>{post.content}</ReactMarkdown> */}
          {/* <Markdown>{post.content}</Markdown> */}
          <Typography
            variant='h6'
            paragraph>
            {post.content}
          </Typography>
        </CardContent>
        <div className={classes.close}>
          <Tooltip
            arrow
            placement='top'
            title='Collapse'>
            <Fab
              color='primary'
              aria-label='Collapse'
              onClick={handleExpandClick}>
              <ExpandLessIcon />
            </Fab>
          </Tooltip>
        </div>
      </Collapse>
    </>
  );
}
