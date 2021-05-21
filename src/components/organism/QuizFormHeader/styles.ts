import styled from 'styled-components';

export const Container = styled.section`
  padding: 0 2.3125rem;

  h1.about-quiz {
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
`;
