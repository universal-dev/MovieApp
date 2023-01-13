import { useContext, useEffect, useState } from "react";
import MovieContext from "../MovieContext";
import genres from "../genres";

const Filter = () => {
  const {
    setActiveGenre,
    activeGenre,
    setFiltered,
    movies,
    header,
    getFavourites,
    fetchPopular
  } = useContext(MovieContext);

  const [moreGenres, setMoreGenres] = useState(false);

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.genre_ids.includes(activeGenre)
      );
      setFiltered(filtered);
    }
  });

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  const [showFav, setShowFav] = useState(true);

  return (
    <div className="filter-container">
      {moreGenres &&
        genres.map((genre) => (
          <button
            key={genre.id}
            className={activeGenre === genre.id ? "active" : null}
            onClick={() => setActiveGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      <button
        className={isActive ? "more active" : "more"}
        onClick={() => {
          handleClick();
          setMoreGenres(!moreGenres);
        }}
      >
        Movie Category
      </button>

      {showFav ? (
        <button
          className="favorite"
          disabled={!showFav}
          onClick={() => {
            getFavourites();
            setShowFav(false);
          }}
        >
          Favorite Movies
        </button>
      ) : null}
      {!showFav ? (
        <button
          className="lobby"
          disabled={showFav}
          onClick={() => {
            fetchPopular();
            setShowFav(true);
          }}
        >
          Back to Lobby
        </button>
      ) : null}
    </div>
  );
};

export default Filter;
