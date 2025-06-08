import "./HeroMovies.scss";

const HeroMovies = ({ movieList }) => {
  const moviesToDisplay = movieList.slice(0, 3);

  return (
    <div>
      <div className="hero-movies">
        <div className="hero-image-container">
          {moviesToDisplay.map((movie, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroMovies;
