import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: "40vw",
    // borderRadius: "5vw",
    // overflow: "hidden",
    // boxShadow: 50, //"50%",
    minWidth: "80vw",
    maxWidth: "90vw",
    position: "relative",
    objectFit: "contain",
    objectPosition: "center top",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginLeft: "5.3vw",
  },
}));

function ImageContainer({ src }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Image
        src={src}
        width={1600}
        height={900}
        layout='responsive'
        placeholder='blur'
      />
    </Box>
  );
}

export default ImageContainer;
