import React from 'react';
import styled from '@emotion/styled';
// import { Global, css } from '@emotion/react';

const Layout = ({ children }) => (
  <RootWrapper>
    <Container>{children}</Container>
    <Footer />
  </RootWrapper>
);

// const Footer = () => (
//   <footer>
//     <Global
//       styles={css`
//         footer {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           margin-top: 3rem;
//           min-height: 10rem;
//           background: #6f6055;
//           color: #fff;
//           padding: 3rem;
//           font-size: 1.5rem;
//         }
//       `}
//     />
//     Copyright 2021 PawanJS
//   </footer>
// );

const Footer = ({ light }) => (
  <StyledFooter light={light}>&copy; Copyright 2021 PawanJS</StyledFooter>
);

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  flex: 1;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  max-width: 100rem;
  font-size: 1.8rem;
  line-height: 1.5;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  min-height: 10rem;
  color: #fff;
  padding: 3rem;
  font-size: 1.5rem;
  background-color: ${(props) => (props.light ? 'pink' : ' #6f6055')};
`;

export default Layout;
