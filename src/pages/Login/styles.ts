import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubContainer = styled.div`
  width: 80rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 31.25rem;
  height: 21.875rem;

  border: 5px solid var(--shape);
  border-radius: 50px;

  z-index: 0;
  img {
    width: 15rem;
    height: 15rem;
    position: absolute;
    transform: translate(-50%, 0%);  
    z-index: 1;
  }
  
  h1 {
    color: var(--shape);
    font-size: 6rem;
    padding-left: 11.5rem;
    transform: translate(0%, -5%);  
    z-index: 2;
  }
`;

export const FormContainer = styled.form`
  
`;
