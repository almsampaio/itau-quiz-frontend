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

export const FormBordersDesign = styled.section`
  position: relative;
  width: 35.75rem;
  height: 44rem;
  background: var(--shape);
  border-radius: 50px;

  div.blue-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--secondary-color);
    transform: translate(-1.5rem, 1.5rem);
    border-radius: 50px;
    z-index: -1;
  }

  div.blue-border {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 5px solid var(--secondary-color);
    transform: translate(1.5rem, -1.5rem);
    border-radius: 50px;
    z-index: 1;

    display: grid;
    place-items: center;
  }
`;

export const FormContainer = styled.div`
  transform: translate(-1.5rem, 1.5rem);
  width: 23rem;
  height: 100%;
`;
