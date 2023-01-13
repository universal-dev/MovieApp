import React from "react";
import Filter from "./Filter";
import Search from "./Search";
import MoviesList from "./MoviesList";

const Container = () => {
  return (
    <div className="container">
      <Search />
      <Filter />
      <MoviesList />
    </div>
  );
};

export default Container;
