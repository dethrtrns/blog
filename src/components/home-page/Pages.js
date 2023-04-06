import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { Typography } from "@material-ui/core";
import FilterContext from "../../../store/filter-context";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    textAlign: "center",
  },
  centerAlign: {
    marginTop: "0px",
    "& > *": {
      justifyContent: "center",
    },
  },
}));

export default function Pages({ pageChange, totalPosts }) {
  const classes = useStyles();
  const { filter: category, pageInfo, searchText } = useContext(FilterContext);
  const { pageSize, currentPage: page, startIndex, lastIndex } = pageInfo;
  const pagesCount = Math.ceil(totalPosts / pageSize);
  const start = startIndex + 1;
  let last = lastIndex + 1;
  if ((page === 1 && page === pagesCount) || searchText) return null;
  last = last < totalPosts ? ` to ${last}` : "";
  if (!totalPosts) {
    return (
      <div className={classes.root}>
        <Typography varient='h3' component='p' align='center' color='error'>
          SORRY! {"\n"} Nothing to show here!
        </Typography>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <Typography variant='subtitle2'>
        Showing posts: ({start}
        {last}) of {totalPosts + " "}
        in {category.title}
      </Typography>
      <Pagination
        className={classes.centerAlign}
        count={pagesCount}
        page={page}
        onChange={pageChange}
        showFirstButton
        showLastButton
        // shape='rounded'
        color='primary'
      />
      {/* <Pagination count={10} variant='outlined' disabled /> */}
    </div>
  );
}
