import { useLocation } from 'react-router-dom';
import {
  StyledSection,
  StyledLink,
  SectionTitle,
  List,
  ListItem,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledSection>
      <SectionTitle>Trending today</SectionTitle>
      <List>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </StyledSection>
  );
};

export default MoviesList;
