import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#380568", //theme.palette.primary.dark,
    backgroundColor: "rgba(76, 72, 185, 0.9)", //theme.palette.primary.light,
    backgroundImage: `url('/purple-quote.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundBlendMode: "screen", //"soft-light", //,
    backgroundPosition: "left",
    border: "1px solid",
    borderLeft: "10px solid",
    // borderColor: "black",
    borderColor: "#7208d6", //theme.palette.primary.main,
    width: "95%",
    maxWidth: "90vw",
    margin: "1em",
    marginLeft: "3em",
    padding: "2em 1em 1.5em 4em",
  },
  quote: {
    fontSize: "1.5em",
    fontStyle: "italic",
    fontWeight: "500",
  },
  author: {
    textAlign: "right",
    fontSize: "1.8em",
    fontWeight: "bold",
    fontStyle: "italic",
  },
}));
//TODO: add some nice fonts here!

function QuoteBlock({ quote, author }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.quote}>{quote}</Typography>
      <Typography className={classes.author}>~{author || "Author"}</Typography>
    </Box>
  );
}

export default QuoteBlock;
