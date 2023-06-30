import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  margin: 200px auto;
  text-align: center;
`;

export const Text = styled.p`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 400;
  color: white;
  -webkit-text-stroke: 1px black;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #a726ac;
  -webkit-text-stroke: 1px black;

  :hover,
  :focus {
    color: black;
    -webkit-text-stroke: 1px white;
  }
`;
export const Section = styled.section`
  margin: ${props => props.margin || '40px 0 0 0'};
`;

export const Title = styled.h1`
  margin: ${props => props.margin || '0 0 20px 0'};
  text-align: ${props => props.position || 'start-left'};
  font-size: ${props => props.size || '18px'};
  font-weight: 700;
  color: #8000ff;
  -webkit-text-stroke: 1px white;
`;
