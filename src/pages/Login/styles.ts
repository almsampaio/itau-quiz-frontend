import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 35.75rem;
  height: 44rem;
  background: var(--shape);
  position: relative;
  border-radius: 50px;

  z-index: 1;
  &::before {
    width: 100%;
    height: 100%;
    content: "";
    background: var(--secondary-color);
    transform: translate(-2rem, 2rem);
    border-radius: 50px;
    position: absolute;
    z-index: 0;
  }

  &::after {
    width: 100%;
    height: 100%;
    content: "";
    background: transparent;
    border: 5px solid var(--secondary-color);
    transform: translate(2rem, -2rem);
    border-radius: 50px;
    position: absolute;
    z-index: 0;
  }
`;