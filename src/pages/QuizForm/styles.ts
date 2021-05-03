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

export const Quiz = styled.form`
  background-color: var(--shape);
  max-width: 91.875rem;
  height: 100%;
  border-radius: 10px;
  margin-left: 24.5rem;
  padding: 3.375rem 4rem 4rem 7rem;

  section:first-child {
    padding: 0 2.3125rem;
  
    h1 {
      margin: 0 0 3.125rem 0.9rem;
    }

    & > div {
      display: grid;
      grid-template-columns: minmax(200px, 3fr) minmax(200px, 1fr);
      gap: 3.75rem;

      @media (max-width: 1080px) {
        display: block;
      }

      div {
        label {
          display: block;
          width: 23rem;
          padding-left: 1rem;
          font-size: 1.1rem;
        }

        input, select {
          display: block;
          width: 100%;
          padding: 0.9rem;
          margin: 0.6rem 0 3.125rem 0;
          border: 1px solid var(--input-border);
          border-radius: 6px;
          background-color: var(--input-background);
          color: var(--text-body);
          letter-spacing: 0.01rem;

          &:focus {
            outline: none;
            border: 2px solid var(--primary-color);
            background-color: var(--input-focus);
          }

          &::placeholder {
            color: var(--text-body);
          }
        }
      }
    }

  }

  div.hr {
    width: 100%;
    height: 0;
    border: 1px solid var(--primary-color);
    border-radius: 10px;
  }

  section {
    h1 {
      margin: 3.125rem 3.2125rem 1.625rem;
    }
  }

  div.buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      padding: 0.8rem;
      cursor: pointer;
      width: 12.5rem;
      border: none;
      background-color: var(--primary-color);
      color: var(--shape);
      font-size: 1.25rem;
      margin: 0 1.875rem;
      border-radius: 6px;
      font-weight: 600;

      &[type="button"] {
        background-color: var(--input-focus);
        color: var(--text-body);
      }
    }
  }
`;
