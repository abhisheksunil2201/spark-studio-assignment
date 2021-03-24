import React, { useContext, useEffect, useState } from "react";
import "./SearchPage.css";
import { SearchDataContext } from "./SearchDataContext";
import uuid from "react-uuid";
import { SearchedNameContext } from "./SearchedNameContext";

function SearchPage() {
  const [searchData, setSearchData] = useContext(SearchDataContext);
  const [SearchedName, setSearchedName] = useContext(SearchedNameContext);
  const [resultPage, setResultPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    if (searchData.collection.items.length === 0) {
      document.getElementById(
        "searchPage__title"
      ).innerHTML = `No Data Found for this search`;
    } else {
      document.getElementById(
        "searchPage__title"
      ).innerHTML = `Search Results for ${SearchedName}`;
    }
    console.log(searchData);
  }, [searchData]);

  useEffect(() => {
    searchData.collection &&
      setPaginatedData(Paginator(searchData.collection.items, resultPage, 3));
    console.log(paginatedData);
  }, [resultPage]);

  const Paginator = (data, page, perPage) => {
    page = page || 1;
    perPage = perPage || 10;
    var offset = (page - 1) * perPage,
      paginatedItems = data.slice(offset).slice(0, perPage);
    return {
      data: paginatedItems,
    };
  };

  const handleClick = (e) => {
    document.getElementsByClassName("active")[0].classList.toggle("active");
    setResultPage(e.target.innerText);
    e.target.classList.toggle("active");
  };

  return (
    <div className="searchPage">
      <h1 className="app__heading">NASA Media Search</h1>
      <h2 id="searchPage__title">Search Results for </h2>
      <div className="searchPage__results">
        {paginatedData.data?.map((item) => (
          <div className="searchPage__item" key={uuid()}>
            <img
              className="searchPage__thumb"
              src={item.links[0].href}
              alt=""
            />
            <div className="searchPage__details">
              <h3>{item.data[0].title}</h3>
              <p>{new Date(item.data[0].date_created).toDateString()}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pages">
        <div className="active" onClick={handleClick}>
          1
        </div>
        <div onClick={handleClick}>2</div>
        <div onClick={handleClick}>3</div>
        <div onClick={handleClick}>4</div>
        <div onClick={handleClick}>5</div>
      </div>
    </div>
  );
}

export default SearchPage;
