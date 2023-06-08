import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrending();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <section>
        <div>
          <h1>Trending Movies</h1>
          {isLoading && <div>Loading</div>}
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
