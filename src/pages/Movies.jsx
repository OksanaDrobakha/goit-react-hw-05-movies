import Form from 'components/Form/Form';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/api';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!search) return;
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMoviesByName(search);
        setMovies(data.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [search]);

  return (
    <>
      <section>
        <div>
          <h1>Search Movies</h1>
          <Form />
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

export default Movies;
