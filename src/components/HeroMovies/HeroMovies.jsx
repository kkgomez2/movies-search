import "./HeroMovies.scss";

const HeroMovies = ({ movieList }) => {
  const moviesToDisplay = movieList.slice(0, 3);

  const firstMovie = movieList[0];
  const secondMovie = movieList[1];
  const thirdMovie = movieList[2];

  return (
    <div>
      <div className="hero-movies">
        <div className="hero-image-container">
          <img
            className="hero-image hero-image-main"
            src={
              firstMovie?.poster_path
                ? `https://image.tmdb.org/t/p/w500/${firstMovie.poster_path}`
                : "/no-movie.png"
            }
          />
          <img
            className="hero-image hero-image-sub hero-image-left"
            src={
              secondMovie?.poster_path
                ? `https://image.tmdb.org/t/p/w500/${secondMovie.poster_path}`
                : "/no-movie.png"
            }
          />
          <img
            className="hero-image hero-image-sub hero-image-right"
            src={
              thirdMovie?.poster_path
                ? `https://image.tmdb.org/t/p/w500/${thirdMovie.poster_path}`
                : "/no-movie.png"
            }
          />
          {/* {moviesToDisplay.map((movie, index) => (
            <>
              <img
                className="hero-image"
                style={{ zIndex: 3 - index, left: 100 * index }}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : "/no-movie.png"
                }
              />
            </>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default HeroMovies;
