import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 2.77778rem;
  align-items: center;
  justify-content: center;
  background-color: #8484ce;

  position: fixed;
  bottom: 0px;
  margin-right: auto;
  margin-left: auto;
`;

export const FooterText = styled.p`
  color: white;
  text-align: center;
`;

export const FooterLink = styled.a`
  color: black;
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;
