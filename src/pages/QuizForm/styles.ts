import styled from 'styled-components';

export const Quiz = styled.form`
  background-color: var(--shape);
  max-width: 91.875rem;
  height: 100%;
  border-radius: 10px;
  margin-left: 24.5rem;
  padding: 3.375rem 4rem 4rem 7rem;

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
