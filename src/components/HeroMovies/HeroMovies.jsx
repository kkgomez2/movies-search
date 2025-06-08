import "./HeroMovies.scss";

const HeroMovies = ({ movieList }) => {
  if (!movieList || movieList?.length < 3) {
    return <img src="./hero.png" />;
  }

  const firstMovie = movieList[0];
  const secondMovie = movieList[1];
  const thirdMovie = movieList[2];

  return (
    <div>
      <div className="hero-movies">
        <div className="hero-image-container">
          <img
            className="hero-image hero-image-main"
            title={firstMovie?.title}
            alt={firstMovie?.title}
            src={
              firstMovie?.poster_path
                ? `https://image.tmdb.org/t/p/w500/${firstMovie.poster_path}`
                : "/no-movie.png"
            }
          />
          <img
            className="hero-image hero-image-sub hero-image-left"
            title={secondMovie?.title}
            alt={secondMovie?.title}
            src={
              secondMovie?.poster_path
                ? `https://image.tmdb.org/t/p/w500/${secondMovie.poster_path}`
                : "/no-movie.png"
            }
          />
          <img
            className="hero-image hero-image-sub hero-image-right"
            title={thirdMovie?.title}
            alt={thirdMovie?.title}
            src={
              thirdMovie?.poster_path
                ? `https://image.tmdb.org/t/p/w500/${thirdMovie.poster_path}`
                : "/no-movie.png"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HeroMovies;
