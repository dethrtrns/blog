import React from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import ModeContext from "../../../store/dark-mode-context";
import FilterContext from "../../../store/filter-context";

const useStyles = makeStyles((theme) => ({
  contentTitle: {
    display: "flex",
    minHeight: "30vh",
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    // backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundBlendMode: "screen",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "nunito",
    fontSize: "5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
    whiteSpace: "pre",
  },
  // overlay: {
  //   position: "absolute",
  //   top: 0,
  //   bottom: 0,
  //   right: 0,
  //   left: 0,
  //   // backgroundColor: "rgba(0,0,0,.3)",
  // "&:hover": {
  //   backgroundColor: "rgba(0,0,0,.9)",
  // },
  // },
}));

export default function ContentTitle({ title, image, id }) {
  const classes = useStyles();
  const { mode } = useContext(ModeContext);

  // if (searchText) {
  //   const title = title;
  //   title = `Searching For...\n ${searchText} \n in ${title}`;
  //   image =
  //     "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  //   // value = searchText;
  // }

  return (
    <Grid item xs={12}>
      <Paper
        id={id}
        className={classes.contentTitle}
        style={
          mode === "dark"
            ? {
                backgroundImage: `url('https://images.unsplash.com/photo-1530508777238-14544088c3ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80')`,
              }
            : { backgroundImage: `url(${image})` }
        }
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: "none" }} src={image} alt={title} />}
        {/* <div className={classes.overlay} /> */}
        <Typography
          // component='h1'
          variant='h2'
          color='primary'
          align='center'
          className={classes.titleText}
          // noWrap
          // gutterBottom
        >
          {title}
        </Typography>
      </Paper>
    </Grid>
  );
}
