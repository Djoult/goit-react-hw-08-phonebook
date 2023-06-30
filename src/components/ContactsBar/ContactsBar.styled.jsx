import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  /* align-items: center; */
  width: 700px;
  margin: 50px auto;
  gap: 100px;
  justify-content: center;
`;
export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #8000ff;
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: #8000ff;
`;

export const Text = styled.h2`
  font-size: 32px;
  color: #8000ff;
  -webkit-text-stroke: 1px white;
`;

export const Message = styled.p`
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  padding: 10px;
  font-size: 24px;
  color: #310328;
`;
