import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";

export default function Media(props) {
  const { post, expanded } = props;
  let cardMediaCss = {
    height: "auto",
    width: "55%",
  };
  if (expanded) {
    cardMediaCss = {
      minHeight: "30vh",
      paddingTop: "56.25%",
      // width: "auto",
    };
  }
  const useStyles = makeStyles({
    cardMedia: cardMediaCss,
  });
  const classes = useStyles();

  return (
    <CardMedia
      className={classes.cardMedia}
      image={post.image}
      title={post.title}
    />
  );
}
