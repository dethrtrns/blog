import { Box, colors, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Link from "../../../helper/materialUtils/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1em",
    whiteSpace: "pre-wrap",
    lineHeight: 1.6,
  },
}));

function Paragraph({ para, fontSize = "1.2em" }) {
  const classes = useStyles();
  //   console.log(paras);

  return (
    <Box className={classes.root}>
      {para.map((item, i) => {
        if (item.text)
          return (
            <Typography
              key={i}
              variant='body1'
              style={{
                fontSize: fontSize,
                borderRadius: "0.5em",
                display: "inline",
                fontWeight: item.text.bold ? "bold" : "null",
                fontStyle: item.text.italic ? "italic" : "normal",
                backgroundColor: item.text.highlight
                  ? colors.deepPurple[300]
                  : "none",
              }}
            >
              {item.text.value}
            </Typography>
          );
        else if (item.link)
          return (
            // TODO: add security props to link component, check mui docs
            <Link
              key={i}
              variant='body1'
              href={item.link.url}
              style={{
                fontSize: fontSize,
                display: "inline",
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              {item.link.text}
            </Link>
          );
      })}
    </Box>
  );
}

export default Paragraph;
