import React from 'react';
import styled from '@emotion/styled';
// import { Global, css } from '@emotion/react';

const Layout = ({ children }) => (
  <>
    <div className="container">{children}</div>
    <Footer />
  </>
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
