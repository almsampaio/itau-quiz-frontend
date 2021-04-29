import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 2.625rem;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  margin: 0 3.25rem;

  img  {
    width: 6.375rem;
    height: 6.375rem;
    margin-bottom: 5rem;
  }
`;

export const Quiz = styled.section`
  background-color: var(--shape);
  width: 91.875rem;
  height: 90vh;
  border-radius: 10px;
  padding: 3.375rem 4.0625rem 4rem 7.8125rem;
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

export const AsideContainer = styled.div`
  transform: translate(-1rem, 0.75rem);
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  h1 {
    font-size: 2.625rem;
    color: var(--secondary-color);
  }
`;
