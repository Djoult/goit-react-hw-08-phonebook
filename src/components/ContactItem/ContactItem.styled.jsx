import styled from 'styled-components';
export const LiItem = styled.li`
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  border: 1px solid #c9a66b;
  width: 100%;
`;
export const SpanIcon = styled.span`
  svg {
    width: 30px;
    height: 30px;
    color: ${props => props.inputColor || 'palevioletred'};
  }
`;

export const SpanName = styled.span`
  -webkit-text-stroke: 1px black;
  color: #fefdfc;
  font-weight: 500;
  font-size: 20px;
`;

export const SpanNumber = styled.span`
  -webkit-text-stroke: 1px white;
  color: #120933;
  font-weight: 500;
  font-size: 20px;
  margin-left: auto;
`;

export const ButtonDlt = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  color: #10063a;
  border-radius: 50%;
  border-color: transparent;
  outline: none;
  transition: transform 250ms ease-in;
  :hover,
  :focus {
    svg {
      transform: scale(1.1);
    }
  }
  svg {
    width: 24px;
    height: 24px;
    transition: transform 250ms linear;
  }
`;
