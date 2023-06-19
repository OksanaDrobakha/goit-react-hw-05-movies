import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
`;

export const Img = styled.img`
  height: 600px;
  width: 400px;
`;

export const MovieInfoCard = styled.div`
  padding-top: 20px;
  max-width: 1100px;
`;

export const MovieName = styled.h2`
  margin-bottom: 20px;
`;

export const MovieInfoText = styled.p`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const MovieInfoTextBold = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
`;
