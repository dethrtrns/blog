import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ContentTitle from "../../src/components/home-page/ContentTitle";
import { ClickAwayListener, TextField } from "@material-ui/core";
import CategoryBar from "./../../src/components/home-page/CategoryBar";
import withWidth from "@material-ui/core/withWidth";
import {
  getAllPostsFull,
  getFeaturedPosts,
} from "./../../src/helper/database/fakePostsDB";
import PostsList from "../../src/components/home-page/posts/PostsList";
import Markdown from "../../src/components/home-page/Markdown";
import FilterContext from "../../store/filter-context";
import Pages from "./../../src/components/home-page/Pages";
import paginate from "./../../src/helper/utils/paginate";
// import _ from "lodash";
import SortButton from "./../../src/components/home-page/SortButton";

const useStyles = makeStyles((theme) => ({
  // mainGrid: {
  //   marginTop: theme.spacing(3),
  // },
  categoryBarFlow: {
    // justifyContent: "center",
    // flexShrink: 1,
    overflowX: "auto",
  },
  grid: {},
  searchBar: {
    // whiteSpace: "pre",
    // minHeight: "20vh",
  },
}));

function Blog({ width }) {
  const classes = useStyles();
  const {
    filter,
    pageInfo,
    searchText,
    sortBy: { value, order },
    setCurrentPage,
    setPageIndex,
    setSearchText,
  } = useContext(FilterContext);
  const [clickAway, setClickAway] = useState(false);

  const { pageSize, currentPage: page } = pageInfo;
  const searchTile = {
    title: `Searching For... \n "${searchText}" \n in ${filter.title}`,
    image:
      "https://images.unsplash.com/photo-1516382799247-87df95d790b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
  };

  const handleClickAway = (e) => {
    // console.log("SEARCH CLEARED!!!");
    setSearchText();
    setClickAway(false);
  };

  const handleSearch = (event) => {
    setClickAway(true);
    setSearchText(event);
  };

  const handlePageChange = (event, value) => {
    // console.log("hey", pageInfo, value);
    // setClickAway(false); use to exclude a click from clearing search like on sort click
    setCurrentPage(event, value);
  };

  let posts = [];
  if (filter.value === "featured") {
    posts = getFeaturedPosts();
  } else if (filter.value === "all") {
    posts = getAllPostsFull();
  } else {
    posts = getAllPostsFull().filter((p) => p.category === filter.value);
  }
  if (searchText) {
    posts = posts.filter((p) =>
      p.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  const totalCount = posts.length;

  posts = _.orderBy(posts, value, order);

  const { pageItems, startIndex, lastIndex } = paginate(posts, page, pageSize);
  if (pageInfo.startIndex !== startIndex || pageInfo.lastIndex !== lastIndex)
    setPageIndex(startIndex, lastIndex);
  const postsOnCurrentPage = searchText ? posts : pageItems;

  return (
    <React.Fragment>
      <Grid
        container
        direction='row'
        justify={"space-evenly"}
        className={classes.grid}
        spacing={1}
      >
        <Grid
          item
          className={classes.categoryBarFlow}
          // container
          // justify='flex-start'
          md={3}
        >
          <CategoryBar
            orientation={
              width <= "md" || width === "xl" ? "vertical" : "horizontal"
            }
            size={width <= "md" || width === "xl" ? "large" : "medium"}
            fullWidth={false}
            color={width <= "md" || width === "xl" ? "primary" : "secondary"}
            variant={"text"}
            groupStyle={
              width <= "md" || width === "xl"
                ? { maxWidth: "24ch", margin: "auto" }
                : {}
            }
            // itemStyle={width <= "md" ? { fontSize: "1.4rem" } : {}}
          />
        </Grid>
        <Grid
          alignContent='center'
          alignItems='center'
          item
          container
          xs={12}
          md={9}
        >
          <Grid item xs={9}>
            <ClickAwayListener
              mouseEvent={clickAway ? "onClick" : false}
              touchEvent={clickAway ? "onTouchEnd" : false}
              onClickAway={handleClickAway}
            >
              <TextField
                fullWidth
                multiline
                rowsMax='3'
                variant='filled'
                size='medium'
                margin='dense'
                id='search-blog'
                label={`Search in ${filter.title}`} // in ${filter.title}
                value={searchText}
                onChange={handleSearch}
                className={classes.searchBar}
              />
            </ClickAwayListener>
          </Grid>
          <Grid item xs={3}>
            <SortButton />
          </Grid>
          {/* <Grid item md={3}></Grid>
          <Grid item md={3}></Grid> */}
          <ContentTitle
            id='contentTitle'
            title={searchText ? searchTile.title : filter.title}
            image={searchText ? searchTile.image : filter.image}
          />
          <PostsList posts={postsOnCurrentPage} bgImage={filter.image} />
          {/* <Grid container spacing={5} className={classes.mainGrid}>
            <Main title='All Posts' posts={posts} />
          </Grid> */}
          <Pages totalPosts={totalCount} pageChange={handlePageChange} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withWidth()(Blog);
