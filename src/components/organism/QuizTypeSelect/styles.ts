import styled from 'styled-components';

export const Container = styled.div`
  label {
    display: block;
    width: 23rem;
    padding-left: 1rem;
    font-size: 1.1rem;
  }

  select {
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
  }
`;
