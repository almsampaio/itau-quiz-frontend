import styled from 'styled-components';

export const Container = styled.div`
  margin: 2.625rem 2.625rem 2.625rem 0;
  overflow-x: hidden;
`;

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.625rem 4.5rem;

  img  {
    width: 6.375rem;
    height: 6.375rem;
    margin-bottom: 5rem;
  }
`;

export const AsideContainer = styled.div`
  transform: translate(-1rem, 0.75rem);
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  h1 {
    margin-bottom: 1rem;
    font-size: 2.625rem;
    color: var(--secondary-color);
  }
`;

export const AsideBordersDesign = styled.section`
  position: relative;
  width: 15.5rem;
  height: 10.625rem;
  background: var(--shape);
  border-radius: 30px;

  div.blue-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--secondary-color);
    transform: translate(-1.1875rem, 0.5625rem);
    border-radius: 30px;
    z-index: -1;
  }

  div.blue-border {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 5px solid var(--yellow-border);
    transform: translate(1rem, -0.75rem);
    border-radius: 30px;
    z-index: 1;

    display: grid;
    place-items: center;
  }
`;
