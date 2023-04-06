import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import SortIcon from "@material-ui/icons/Sort";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import FilterContext from "../../../store/filter-context";

const useStyles = makeStyles((theme) => ({
  popper: {
    zIndex: 1,
  },
  btnGroup: {
    // marginTop: "5%",
  },
}));

const options = ["Title", "Date"];

export default function SortButton() {
  const classes = useStyles();

  const {
    sortBy: { value, order },
    setSortBy,
  } = useContext(FilterContext);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    // console.info(`You clicked ${options[selectedIndex]}`);
    setSortBy(options[selectedIndex]);
  };

  const handleMenuItemClick = (event, index) => {
    setOpen(false);
    if (index === selectedIndex) return;
    setSelectedIndex(index);
    setSortBy(options[index]);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    // <Grid container direction='column' alignItems='center'>
    <>
      <ButtonGroup
        className={classes.btnGroup}
        fullWidth
        variant='contained'
        color='primary'
        ref={anchorRef}
        aria-label='sort button'
      >
        <Button
          endIcon={order === "asc" ? <ArrowDownward /> : <ArrowUpward />}
          onClick={handleClick}
          size='large'
        >
          {options[selectedIndex]}
        </Button>
        <Button
          style={{ width: "30%" }}
          variant='outlined'
          //   startIcon={<SortIcon />}
          color='primary'
          size='small'
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label='select merge strategy'
          aria-haspopup='menu'
          onMouseEnter={() => {
            setOpen(true);
          }}
          onMouseLeave={() => {
            setOpen(false);
          }}
          onClick={handleToggle}
        >
          {/* Sort <br /> By */}
          {/* <SortIcon /> */}
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        className={classes.popper}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement='bottom-end'
        transition
        disablePortal
        onMouseEnter={() => {
          setOpen(true);
        }}
        onMouseLeave={() => {
          setOpen(false);
        }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id='split-button-menu'>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      // disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
    // </Grid>
  );
}
