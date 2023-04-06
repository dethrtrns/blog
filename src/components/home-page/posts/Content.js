import { makeStyles } from "@material-ui/core/styles";
import ModeContext from "../../../../store/dark-mode-context";
import { useContext } from "react";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import ActionCollapse from "./ActionCollapse";
import Link from "../../../helper/materialUtils/Link";

const useStyles = makeStyles({
  cardDetails: {
    // backgroundImage: "url(https://source.unsplash.com/random)",
    // backgroundColor: "rgba(255,255,255,.7)",
    // backgroundColor: "red",
    // backgroundColor: "black",

    // "&:hover": {
    //   backgroundColor: "rgba(0,0,0,.9)",
    // },
    backgroundBlendMode: "screen",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Content(props) {
  const classes = useStyles();
  const { mode } = useContext(ModeContext);
  const { post, bgImage, expanded, handleExpandClick } = props;

  return (
    <div
      className={classes.cardDetails}
      style={
        mode === "dark"
          ? {
              background: "none",
              // backgroundImage: `url(${bgImage})`,
              // backgroundColor: "rgba(0,0,0,0.9)",
            }
          : {
              backgroundImage: `url(${bgImage})`,
              backgroundColor: "rgba(255,255,255,0.9)",
            }
      }>
      {!expanded ? (
        <CardContent>
          <Typography
            variant='h6'
            paragraph>
            {post.description}
          </Typography>
          <Link href='#'>Continue Reading...</Link>
        </CardContent>
      ) : null}
      <ActionCollapse
        post={post}
        expanded={expanded}
        handleExpandClick={handleExpandClick}
      />
    </div>
  );
}
