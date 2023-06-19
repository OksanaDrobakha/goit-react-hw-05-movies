import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import {
  Author,
  NoReviewsText,
  Review,
  ReviewHeader,
  ReviewList,
  ReviewListItem,
  Wrapper,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await fetchReviews(movieId);

        setReviews(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [movieId]);
  return (
    <Wrapper>
      <ReviewHeader>Reviews</ReviewHeader>
      {isLoading && <Loader />}
      {reviews.length ? (
        <ReviewList>
          {reviews.map(({ id, name, content }) => (
            <ReviewListItem key={id}>
              <Author>{name}</Author>
              <Review>{content}</Review>
            </ReviewListItem>
          ))}
        </ReviewList>
      ) : (
        <NoReviewsText>
          We don't have any reviews for this movie yet.
        </NoReviewsText>
      )}
    </Wrapper>
  );
};

export default Reviews;
