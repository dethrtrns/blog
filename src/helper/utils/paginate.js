import { useContext } from "react";
import FilterContext from "../../../store/filter-context";
import _ from "lodash";

export default function paginate(items, pageNumber, pageSize) {
  // console.log(pageNumber, pageSize);
  const startIndex = pageSize * (pageNumber - 1);
  const pageItems = _(items).slice(startIndex).take(pageSize).value();
  const lastIndex = startIndex + (pageItems.length - 1);
  return { startIndex, lastIndex, pageItems };
}
