import styled from 'styled-components';

export const Wrapper = styled.main`
  align-items: center;
  background: #06092b;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  line-height: 1.5;
  padding: 3rem;
  text-align: center;
  width: 100%;
`;

export const Logo = styled.img`
  margin-bottom: 3rem;
  max-width: 25rem;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-top: 1rem;
  max-width: 45rem;
`;

export const Illustration = styled.img`
  margin-top: 2rem;
  width: min(30rem, 100%);
`;
