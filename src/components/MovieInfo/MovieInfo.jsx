import {
  Img,
  MovieCardContainer,
  MovieInfoCard,
  MovieInfoText,
  MovieInfoTextBold,
  MovieName,
} from './MovieInfo.styled';

const MovieInfo = ({ movieDetails }) => {
  const { poster, year, genresList, vote, title, overview } = movieDetails;
  return (
    <MovieCardContainer style={{ display: 'flex', gap: 20 }}>
      <Img src={poster} alt={title} />
      <MovieInfoCard>
        <MovieName>
          {title} ({year})
        </MovieName>
        <MovieInfoText>User Score: {vote}%</MovieInfoText>
        <MovieInfoTextBold>Overview</MovieInfoTextBold>
        <p>{overview}</p>
        <MovieInfoText>
          <MovieInfoTextBold>Genres:</MovieInfoTextBold>
          <p>{genresList}</p>
        </MovieInfoText>
      </MovieInfoCard>
    </MovieCardContainer>
  );
};

export default MovieInfo;
