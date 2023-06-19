import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledNavLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <div>
          <nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </nav>
        </div>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default SharedLayout;
