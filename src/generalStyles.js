import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

export const Title = styled.h1`
  font-size: 4em;
  font-weight: 700;
  text-shadow: 1px 1px black;
`;

export const Text = styled.p`
  font-size: 2em;
  font-weight: 700;
  text-shadow: 1px 1px black;
`;

export const TextSmall = styled.p`
  font-size: 1em;
  font-weight: 400;
  text-shadow: 1px 1px black;
`;

export const Line = styled.p`
  margin: 24px 0;
  line-height: 1.3em;
`;

export const Link = styled.a`
  text-decoration: none;
  text-align: center;
  
  color: white;
  &:hover{ text-shadow: 1px 1px 10px white; }
  &:visited{ color: white; }
`;

export const Button = styled.button`
  text-decoration: none;
  text-align: center;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  margin: 12px;

  color: white;
  &:hover{ text-shadow: 1px 1px 10px white; }
  &:visited{ color: white; }
`;

export const Card = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 1px solid #EEE;
  box-shadow: 0 0 10px #CCC;
  border-radius: 2px;
  max-width: 300px;
  min-width: 250px;
`;
