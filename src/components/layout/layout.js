import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  responsiveFontSizes,
  makeStyles,
  Paper,
  Box,
  Grid,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useContext } from "react";
import ModeContext from "../../../store/dark-mode-context";
import Footer from "../home-page/Footer";
import Header from "../home-page/Header";
import { useRouter } from "next/router";
import theme from "./../../helper/materialUtils/theme";
import {
  deepOrange,
  deepPurple,
  lime,
  orange,
  pink,
  purple,
  red,
  yellow,
} from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  paperBgLight: {
    backgroundAttachment: "fixed",
    background:
      "linear-gradient(225deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 500%)",
  },
  paperBgDark: {
    backgroundAttachment: "fixed",
    background: "black",
    // "linear-gradient(45deg, rgba(210,15,15,0.51) 2%, rgba(6,0,0,1) 18%, rgba(11,0,0,1) 38%, rgba(0,0,0,0) 38%, rgba(5,0,0,1) 58%, rgba(11,1,1,0.37587006960556846) 70%, rgba(0,0,0,1) 83%)",
  },
  // "linear-gradient(45deg, rgba(0,0,0,0.3241299303944315) 9%, rgba(255,255,255,0.3) 16%, rgba(230,255,0,0.31) 16%, rgba(196,170,170,0.31) 33%, rgba(255,246,246,0.1) 33%, rgba(0,255,12,0.245707656612529) 46%, rgba(255,255,255,1) 59%, rgba(255,119,230,0.235266821345707655) 59%, rgba(227,244,47,0.425638051044087) 71%, rgba(0,0,0,0.216867749419953597) 84%, rgba(255,255,255,1) 84%, rgba(255,200,200,0.4895591647331786) 100%)",
  root: {
    minHeight: "100vh",
    // backgroundImage: `url('/bg.jpg')`,
    backgroundImage: `url('/bg.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundBlendMode: "screen",
    backgroundColor: "#871ae0", // "#c993ff...#871ae0",
  },
}));

function Layout(props) {
  const router = useRouter();
  const { mode } = useContext(ModeContext);
  const classes = useStyles();

  // console.log(router);
  // console.log("Path:-", router.pathname);
  // console.log("route:-", router.route);

  //MUI theme modifications starts here:->
  if (mode === "dark") {
    theme = createMuiTheme({
      palette: {
        type: mode,
        primary: purple,
        secondary: orange,
      },
    });
  } else {
    theme = createMuiTheme({
      palette: {
        type: mode,
        primary: deepPurple,
        secondary: deepOrange,
      },
    });
  }

  theme.props = {
    MuiCard: {
      raised: true,
    },
    MuiGrid: {
      // zeroMinWidth: true,
    },
  };

  theme.overrides = {
    MuiCard: {
      root: {
        background: "none",
      },
    },
  };

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Paper
        className={
          mode === "dark" ? classes.paperBgDark : classes.paperBgLight
        }>
        <div className={router.pathname === "/" ? classes.root : undefined}>
          <CssBaseline />
          {router.pathname !== "/" ? (
            <>
              <Header title='theZone' />
              <Box>{props.children}</Box>
            </>
          ) : (
            props.children
          )}
          {/* <Container maxWidth='lg'>
            <Header title='theZone' />
            {props.children}
          </Container> */}
          <Footer
            title='The_Zone'
            // description=''
          />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default Layout;
