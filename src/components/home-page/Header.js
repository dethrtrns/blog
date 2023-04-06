import React, { useContext, useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Link from "../../helper/materialUtils/Link";
import ModeContext from "../../../store/dark-mode-context";
import { AppBar, Box, Collapse, Fab, IconButton } from "@material-ui/core";
import { Brightness4, WbSunnyOutlined } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarSwipeableDrawer from "./SidebarSwipeableDrawer";
import { useRouter } from "next/router";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  rootDay: {
    height: "100vh",
    backgroundImage: `url('https://images.unsplash.com/photo-1496497243327-9dccd845c35f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Nunito",
    backgroundColor: "#871ae0",
    backgroundBlendMode: "screen",
    backgroundAttachment: "fixed",
    marginBottom: theme.spacing(3),
  },
  rootNight: {
    height: "100vh",
    backgroundImage: `url('https://images.unsplash.com/photo-1530508777238-14544088c3ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Nunito",
    backgroundAttachment: "fixed",
    marginBottom: theme.spacing(3),
  },
  appbar: {
    background: "none",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
    fontFamily: "Nunito",
    "&:hover": {
      // color: "white",
      fontSize: "6rem",
    },
  },
  colorText: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
    "&:hover": {
      // color: "white",
      fontSize: "6rem",
    },
  },
  fabNight: {
    margin: theme.spacing(1),
    backgroundColor: "black",
    border: "15px solid rgba(255,255,255,.1)",
    color: "white",
    "&:hover": {
      color: "black",
      backgroundColor: "white", //"rgba(0,0,0,.3)",
    },
  },
}));

export const collapseNavHandler = (event) => {
  event.preventDefault();
  const data = event.target.value;
};

export default function Header() {
  const { setMode, mode } = useContext(ModeContext);
  const classes = useStyles();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);
  // const { title } = props;

  const setBgImg = () => {
    if (router.pathname === "/home") return;
    let BgImg = {
      backgroundImage: `url(${"https://images.unsplash.com/photo-1530508777238-14544088c3ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80"})`,
    };
    return BgImg;
  };

  return (
    <React.Fragment>
      <div
        className={mode === "dark" ? classes.rootNight : classes.rootDay}
        style={setBgImg()}
      >
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar className={classes.toolbar}>
            <SidebarSwipeableDrawer />
            <Tooltip
              title={
                mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
              arrow
              placement='left'
              TransitionComponent={Zoom}
            >
              <Fab
                elevation={3}
                className={classes.fabNight}
                onClick={setMode}
                size='small'
                aria-label='dark-mode'
              >
                {/* {mode === "dark" ? "" : "DarkMode!"} */}
                {mode === "dark" ? <WbSunnyOutlined /> : <Brightness4 />}
              </Fab>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
          <Box className={classes.container}>
            <Typography
              component='h3'
              variant='h1'
              color='secondary'
              align='center'
              noWrap
            >
              <Link
                className={classes.title}
                variant='inherit'
                underline='none'
                href='/'
              >
                the<span className={classes.colorText}>Zone.</span>
              </Link>
            </Typography>
            <Scroll to='search-blog' smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
            </Scroll>
          </Box>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
