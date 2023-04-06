import { makeStyles } from "@material-ui/core/styles";
import { ButtonGroup, Button, Box } from "@material-ui/core";
import BallotIcon from "@material-ui/icons/Ballot";
import { getCategories } from "./../../helper/database/fakeDB";
import { useContext } from "react";
import FilterContext from "../../../store/filter-context";

const useStyles = makeStyles((theme) => ({
  //   toolbarSecondary: {
  //     justifyContent: "space-between",
  //     overflowX: "auto",
  //   },
  //   toolbarLink: {
  //     padding: theme.spacing(1),
  //     flexShrink: 1,
  //     "&:hover": {
  //       fontWeight: "bold",
  //       fontSize: "1rem",
  //     },
  //   },
  categoryBar: {
    display: "flex",
    justifyContent: "space-between",
    overflowX: "auto",
    // marginBottom: "1rem",
    // padding: 0,
  },
  categoryBarItems: {
    textAlign: "center",
    flexShrink: 0,
    "&:hover": {
      fontWeight: 900,
      //   fontSize: "1rem",
    },
    // "& .MuiButton-text": {
    //   padding: "1px 8px",
    // },
  },
}));

const CategoryBar = ({
  orientation,
  fullWidth,
  color,
  variant,
  size,
  groupStyle,
  itemStyle,
}) => {
  const classes = useStyles();
  const { filter, setFilter } = useContext(FilterContext);
  const categories = getCategories();

  return (
    <Box>
      <ButtonGroup
        orientation={orientation}
        color={color}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        aria-label='categories-filter'
        className={classes.categoryBar}
        style={groupStyle}
      >
        {categories.map((category) => (
          <Button
            key={category.title}
            onClick={() => setFilter(category.value)}
            // startIcon={<BallotIcon />}
            className={classes.categoryBarItems}
            style={itemStyle}
            disabled={category.value === filter.value}
          >
            {category.title}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default CategoryBar;
