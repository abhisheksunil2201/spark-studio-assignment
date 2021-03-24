import React, { useContext } from "react";
import "./Topbar.css";
import { SearchDataContext } from "./SearchDataContext";
import { SearchedNameContext } from "./SearchedNameContext";
import { useHistory } from "react-router";

function Topbar() {
  const [searchData, setSearchData] = useContext(SearchDataContext);
  const [SearchedName, setSearchedName] = useContext(SearchedNameContext);
  const history = useHistory();
  const searchText = () => {
    const val = document.getElementById("topbar__searchText")?.value;
    if (val !== "") {
      fetch(`https://images-api.nasa.gov/search?q=${val}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchData(data);
          setSearchedName(val);
          history.push("/search");
        });
    }
  };
  return (
    <div className="topbar">
      <h1 id="topbar__imageTitle">Image Title</h1>
      <div className="topbar__search">
        <input id="topbar__searchText" type="text" />
        <button className="topbar__searchButton" onClick={searchText}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Topbar;
