import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    // color: theme.palette.primary.dark, //"#380568", //
    backgroundColor: theme.palette.primary.light, //"rgba(76, 72, 185, 0.9)", //
    border: "1px solid",
    borderLeft: "10px solid",
    borderColor: theme.palette.primary.dark, //"#7208d6",
    width: "95%",
    maxWidth: "90vw",
    marginLeft: "3em",
    padding: "1em 1em 1em 3em",
  },
  text: {
    fontSize: "1.3em",
    fontStyle: "italic",
    fontWeight: "500",
  },
}));
//TODO: add some nice fonts here!

function HighlightedBlock({ text }) {
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Start Typing here...");
  const classes = useStyles();
  // let TextEntered = "";

  function getSelectedText() {
    var selectedText = "";

    // window.getSelection
    if (window.getSelection) {
      selectedText = window.getSelection();
    }
    // document.getSelection
    else if (document.getSelection) {
      selectedText = document.getSelection();
    }
    // document.selection
    else if (document.selection) {
      selectedText = document.selection.createRange().text;
    } else return;
    // To write the selected text into the textarea
    // document.testform.selectedtext.value = selectedText;
  }

  const changeHandler = (e) => {
    if (e.target.textContent) setPlaceholder((prevVal) => (prevVal = null));
    const value = e.target.textContent;
    setValue((prevVal) => (prevVal = value));
  };

  return (
    <Box className={classes.root}>
      {/* <input onSelect={e=>console.log(e.target.value)} ></input> */}
      <Typography
        // enterKeyHint='hinting to...'
        // onSelect={(e) => console.log(e.target.value)}
        onInput={changeHandler} //(e) => console.log(e.target.textContent)
        // value={value}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className={classes.text}
      >
        {value ? value : placeholder}
      </Typography>
    </Box>
  );
}

export default HighlightedBlock;

// [{name:'shashank', age: 25},2,3,4,5].map(el=> <SHA title={el.name} sub={el.age} />)
