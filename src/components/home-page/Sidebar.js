import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "../../helper/materialUtils/Link";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import CategoryBar from "./CategoryBar";
import { getArchives, getSocial } from "../../helper/database/fakeDB";

const sidebar = {
  title: "About Me",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
};

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    // background: "none",
    // backgroundColor: "white",
  },
  box: {
    // background: "none",
    backgroundColor: "rgba(255,255,255, 0.7)",
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  imgAuthor: {
    clipPath: "circle()",
    shapeOutside: "circle()",
    objectFit: "cover",
  },
  socialIcon: {
    "&:hover": {
      // color: "white",
      fontSize: "2rem",
    },
  },
}));

export default function Sidebar({ onClick }) {
  const classes = useStyles();
  const archives = getArchives();
  const social = getSocial();

  const { description, title } = sidebar;

  return (
    <Box>
      <Paper
        elevation={4}
        className={classes.sidebarAboutBox}>
        <Typography
          variant='h3'
          align='center'
          gutterBottom>
          {title}
        </Typography>
        <Box m={2}>
          <Image
            className={classes.imgAuthor}
            src={"/bgUnsplash.jpg"}
            alt={"Picture of the author"}
            height={3456} //originalimg-5184*3456
            width={3456}
            layout='responsive'
          />
        </Box>
        <Typography>{description}</Typography>
      </Paper>
      <Box
        className={classes.box}
        boxShadow={3}>
        <Typography
          variant='h6'
          color='primary'
          className={classes.sidebarSection}>
          Explore more:
        </Typography>
        <List>
          {social.map((network) => (
            <ListItem
              button
              component={Link}
              onClick={onClick(false)}
              color='primary'
              href={network.url}
              key={network.name}>
              <ListItemIcon className={classes.socialIcon}>
                <network.icon
                  color={"primary"}
                  className={classes.socialIcon}
                />
              </ListItemIcon>
              <ListItemText primary={network.name} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
      <Box
        onClick={onClick(false)}
        className={classes.box}
        boxShadow={10}>
        <Typography
          variant='h6'
          align='center'
          className={classes.sidebarSection}>
          Categories:
        </Typography>
        <CategoryBar
          orientation={"vertical"}
          size={"large"}
          fullWidth={true}
          color={"primary"}
          variant={"text"}
        />
      </Box>
      <Divider />
      <Box
        className={classes.box}
        boxShadow={6}>
        <Typography
          variant='h6'
          className={classes.sidebarSection}>
          Archives:
        </Typography>
        <List>
          {archives.map((archive) => (
            <ListItem
              button
              href={archive.url}
              key={archive.title}>
              <ListItemText primary={archive.title} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
