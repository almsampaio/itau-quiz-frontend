import styled from 'styled-components';

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

        input {
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
      background-color: var(--input-focus);
      color: var(--text-body);
      font-size: 1.25rem;
      margin: 0 1.875rem;
      border-radius: 6px;
      font-weight: 600;

      &[type='submit'] {
        background-color: var(--primary-color);
        color: var(--shape);
        position: relative;
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  right: -1rem;

  img {
    width: 3rem;
  }
`;
