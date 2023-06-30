import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SpanIcon = styled.span`
  svg {
    width: 50px;
    height: 50px;
    color: ${props => props.inputColor || 'palevioletred'};
  }
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: #8e1c7b;
  -webkit-text-stroke: 1px white;
`;

export const Button = styled.button`
  background-color: #6a2ddb;
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 40px;

  &:hover,
  &:focus,
  &:active {
    background-color: rgb(0, 55, 255);
    color: #ffffff;
  }
`;
