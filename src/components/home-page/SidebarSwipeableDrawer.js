import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "./Sidebar";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  sidebar: {
    minWidth: 250,
    maxWidth: 500,
    width: "50vw",
  },
  bgNone: {
    "& .MuiPaper-root": {
      background: "none",
      backgroundColor: "rgba(255,255,255, 0.5)",
    },
  },
  fabIcon: {
    background: "rgba(0,0,0,.7)", //"black",
    "&:hover": {
      color: "rgba(0,0,0,1)", //"black",
      backgroundColor: "rgba(255, 255, 255,.9)", // "white"->"rgba(255, 255, 255,.9)",
    },
  },
  icon: {
    "&:hover": {
      fontSize: "2rem",
    },
  },
});

export default function SidebarSwipeableDrawer() {
  const classes = useStyles();
  const [sidebarDrawer, setSidebarDrawer] = React.useState({
    open: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSidebarDrawer({ open });
  };

  const sidebar = () => (
    <div
      className={classes.sidebar}
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Sidebar onClick={toggleDrawer} />
    </div>
  );

  return (
    <div>
      <Box hidden={sidebarDrawer.open}>
        <Fab
          className={classes.fabIcon}
          onClick={toggleDrawer(true)}
          size='medium'
          color='primary'
        >
          <MenuIcon className={classes.icon} />
        </Fab>
      </Box>

      <SwipeableDrawer
        className={classes.bgNone}
        anchor='left'
        open={sidebarDrawer.open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {sidebar()}
      </SwipeableDrawer>
    </div>
  );
}
