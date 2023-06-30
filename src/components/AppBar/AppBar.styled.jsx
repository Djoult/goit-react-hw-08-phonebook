import styled from 'styled-components';

export const Header = styled.header`
  background: linear-gradient(-45deg, #dd866c, #da5d8d, #39b4e1, #11ca71);
  opacity: 0.9;
  position: sticky;
  top: -1px;
  padding: 15px 30px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  border-bottom: 5px;
  box-shadow: 0px 10px 20px -2px rgba(255, 230, 0, 0.5);

  & a {
    color: #130796;
    -webkit-text-stroke: 1px black;
  }

  & a.active {
    padding: 10px;
    color: #1b7973;
    border-radius: 30px;
    background: #a9add9;
  }

  & a.active svg {
    display: block;
  }
`;
