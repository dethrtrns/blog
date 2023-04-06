import { createContext, useState } from "react";
import { getCategories } from "../src/helper/database/fakeDB";

const FilterContext = createContext({
  filter: {
    title: "Featured Posts",
    value: "featured",
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  setFilter: function (filterValue) {},
  pageInfo: {
    currentPage: 1,
    pageSize: 4,
    startIndex: 0,
    lastIndex: 3,
  },
  setCurrentPage: function (event, value) {},
  setPageIndex: function (start, last) {},
  searchText: "",
  setSearchText: function (event) {},
  sortBy: { value: "date", order: "desc" },
  setSortBy: function () {},
});

export function FilterContextProvider(props) {
  const [searchText, setSearchText] = useState("");

  const [sortBy, setSortBy] = useState({
    value: "date",
    order: "desc",
  });

  const [filter, setFilter] = useState({
    title: "Featured Posts",
    value: "featured",
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  });
  const [pageInfo, setCurrentPage] = useState({
    currentPage: 1,
    pageSize: 4,
    startIndex: 0,
    lastIndex: 3,
  });

  const categories = [
    {
      title: "Featured Posts",
      value: "featured",
      image:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    ...getCategories(),
  ];
  // console.log(categories);
  const setFilterHandler = (filterValue) => {
    // console.log("yup", filter);
    const filter = categories.find((c) => c.value === filterValue);
    setFilter(filter);
    const currentPageInfo = { ...pageInfo };
    currentPageInfo.currentPage = 1;
    setCurrentPage(currentPageInfo);
  };

  const setPageHandler = (event, value) => {
    const currentPageInfo = { ...pageInfo };
    currentPageInfo.currentPage = value;
    document.getElementById("contentTitle").scrollIntoView();
    setCurrentPage(currentPageInfo);
  };

  const setPageIndexHandler = (start, last) => {
    const currentPageInfo = { ...pageInfo };
    currentPageInfo.startIndex = start;
    currentPageInfo.lastIndex = last;
    setCurrentPage(currentPageInfo);
  };

  const setSearchTextHandler = (event) => {
    if (searchText || event) {
      if (event) setSearchText(event.target.value);
      else setSearchText("");
    }
    // console.log("eventTXT-", event.target.value);
    // console.log("stateTXT-", searchText);
  };

  const setSortByHandler = (value) => {
    const val = value.toLowerCase();
    if (val === sortBy.value) {
      setSortBy({
        value: val,
        order: sortBy.order === "desc" ? "asc" : "desc",
      });
    } else {
      if (val === "date") setSortBy({ value: val, order: "desc" });
      else setSortBy({ value: val, order: "asc" });
    }
  };

  const context = {
    filter: filter,
    setFilter: setFilterHandler,
    pageInfo: pageInfo,
    setCurrentPage: setPageHandler,
    setPageIndex: setPageIndexHandler,
    searchText: searchText,
    setSearchText: setSearchTextHandler,
    sortBy: sortBy,
    setSortBy: setSortByHandler,
  };

  return (
    <FilterContext.Provider value={context}>
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
