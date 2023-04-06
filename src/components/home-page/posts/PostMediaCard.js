import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { getAllPostsFull } from "./../../../helper/database/fakePostsDB";
import Markdown from "./../Markdown";
import SvgIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.standard,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PostMediaCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const posts = getAllPostsFull();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label={posts[0].category} className={classes.avatar}>
            {posts[1].category}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography component='h2' variant='h5'>
            {posts[0].title}
          </Typography>
        }
        subheader='September 14, 2016'
      />
      <CardMedia
        className={classes.media}
        image='/static/images/cards/paella.jpg'
        title='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          {/* <SvgIcon>
            <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
          </SvgIcon> */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
          </svg>
        </IconButton>
        <IconButton>
          <svg
            height='24px'
            width='24px'
            version='1.1'
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>10. Chart up Copy</title>
            <defs />
            <g
              id='10.-Chart-up-Copy'
              fill='none'
              fillRule='evenodd'
              stroke='none'
              strokeLinecap='round'
              strokeWidth='1'
            >
              <path
                id='Layer-1'
                d='M2,85.0094776 C2,83.347389 3.35010672,82 5,82 L18.2,82 C19.8568542,82 21.2,83.3366311 21.2,85.0094776 L21.2,98 L2,98 L2,85.0094776 Z'
                fill='#6FCCB3'
                stroke='#6FCCB3'
                strokeWidth='4'
              />
              <path
                id='Layer-2'
                d='M21,65.0074199 C21,63.3464677 22.3501067,62 24,62 L37.2,62 C38.8568542,62 40.2,63.3455393 40.2,65.0074199 L40.2,98 L21,98 L21,65.0074199 Z'
                fill='#63BBA4'
                stroke='#63BBA4'
                strokeWidth='4'
              />
              <path
                id='Layer-3'
                d='M40,44.9910051 C40,43.3391186 41.3501067,42 43,42 L56.2,42 C57.8568542,42 59.2,43.3427539 59.2,44.9910051 L59.2,98 L40,98 L40,44.9910051 Z'
                fill='#55AB94'
                stroke='#55AB94'
                strokeWidth='4'
              />
              <path
                id='Layer-4'
                d='M60,25.0026984 C60,23.3443539 61.3501067,22 63,22 L76.2,22 C77.8568542,22 79.2,23.3513777 79.2,25.0026984 L79.2,98 L60,98 L60,25.0026984 Z'
                fill='#459680'
                stroke='#459680'
                strokeWidth='4'
              />
              <path
                id='Layer-5'
                d='M79,5.00494794 C79,3.34536102 80.3501067,2 82,2 L95.2,2 C96.8568542,2 98.2,3.33876028 98.2,5.00494794 L98.2,98 L79,98 L79,5.00494794 Z'
                fill='#3A816D'
                stroke='#3A816D'
                strokeWidth='4'
              />
              <path
                id='Layer-6'
                d='M26.3116803,15.7771044 L31.2992615,20.7646856 C31.6740848,21.1395089 31.9796684,21.0128809 31.9802524,20.480305 L31.9994612,2.96325727 C32.0000535,2.42317816 31.5687805,1.9994166 31.0362045,2.0000006 L13.5191565,2.01920902 C12.9790774,2.01980124 12.859259,2.32468304 13.2347759,2.70019994 L18.2059145,7.67133854 L2.8405038,23.0367492 C1.719102,24.158151 1.71957859,25.9798435 2.84345836,27.1037233 L6.87929554,31.1395605 C8.00018202,32.260447 9.82402163,32.264763 10.9462696,31.142515 L26.3116803,15.7771044 L26.3116803,15.7771044 Z'
                fill='#A4B8CE'
                stroke='#A4B8CE'
                strokeWidth='4'
              />
            </g>
          </svg>
        </IconButton>
        <IconButton>
          <svg
            width='24px'
            height='24px'
            viewBox='0 0 100 100'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>10. Chart up Copy</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id='10.-Chart-up-Copy'
              stroke='none'
              stroke-width='1'
              fill='none'
              fill-rule='evenodd'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path
                d='M2,85.0094776 C2,83.347389 3.35010672,82 5,82 L18.2,82 C19.8568542,82 21.2,83.3366311 21.2,85.0094776 L21.2,98 L2,98 L2,85.0094776 Z'
                id='Layer-1'
                stroke='#6FCCB3'
                stroke-width='4'
                fill='#6FCCB3'
              ></path>
              <path
                d='M21,65.0074199 C21,63.3464677 22.3501067,62 24,62 L37.2,62 C38.8568542,62 40.2,63.3455393 40.2,65.0074199 L40.2,98 L21,98 L21,65.0074199 Z'
                id='Layer-2'
                stroke='#63BBA4'
                stroke-width='4'
                fill='#63BBA4'
              ></path>
              <path
                d='M40,44.9910051 C40,43.3391186 41.3501067,42 43,42 L56.2,42 C57.8568542,42 59.2,43.3427539 59.2,44.9910051 L59.2,98 L40,98 L40,44.9910051 Z'
                id='Layer-3'
                stroke='#55AB94'
                stroke-width='4'
                fill='#55AB94'
              ></path>
              <path
                d='M60,25.0026984 C60,23.3443539 61.3501067,22 63,22 L76.2,22 C77.8568542,22 79.2,23.3513777 79.2,25.0026984 L79.2,98 L60,98 L60,25.0026984 Z'
                id='Layer-4'
                stroke='#459680'
                stroke-width='4'
                fill='#459680'
              ></path>
              <path
                d='M79,5.00494794 C79,3.34536102 80.3501067,2 82,2 L95.2,2 C96.8568542,2 98.2,3.33876028 98.2,5.00494794 L98.2,98 L79,98 L79,5.00494794 Z'
                id='Layer-5'
                stroke='#3A816D'
                stroke-width='4'
                fill='#3A816D'
              ></path>
              <path
                d='M26.3116803,15.7771044 L31.2992615,20.7646856 C31.6740848,21.1395089 31.9796684,21.0128809 31.9802524,20.480305 L31.9994612,2.96325727 C32.0000535,2.42317816 31.5687805,1.9994166 31.0362045,2.0000006 L13.5191565,2.01920902 C12.9790774,2.01980124 12.859259,2.32468304 13.2347759,2.70019994 L18.2059145,7.67133854 L2.8405038,23.0367492 C1.719102,24.158151 1.71957859,25.9798435 2.84345836,27.1037233 L6.87929554,31.1395605 C8.00018202,32.260447 9.82402163,32.264763 10.9462696,31.142515 L26.3116803,15.7771044 L26.3116803,15.7771044 Z'
                id='Layer-6'
                stroke='#A4B8CE'
                stroke-width='4'
                fill='#A4B8CE'
              ></path>
            </g>
          </svg>
        </IconButton>
        <Chip
          variant='outlined'
          clickable
          onClick={handleExpandClick}
          label='Quick Read'
          color='primary'
          aria-expanded={expanded}
          aria-label='Quick Read'
          icon={
            <ExpandMoreIcon
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
            />
          }
        />
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>{posts[0].content}</Typography>
          {/*<Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography> 
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>*/}
        </CardContent>
      </Collapse>
    </Card>
  );
}
