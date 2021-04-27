import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 3.5rem 0 2.5rem 0;
    font-size: 2rem;
    color: var(--primary-color);
  }

  p {
    margin-bottom: 4rem;
    font-size: 1.2rem;
    letter-spacing: 0.045rem;
  }

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
    color: var(--input-text);
    font-weight: 600;
    letter-spacing: 0.01rem;

    &:focus {
      outline: none;
      border: 2px solid var(--primary-color);
      background-color: var(--input-focus);
    }
  }

  div {
    width: 100%;
    display: grid;
    place-items: center;

    &:last-child {
      margin-top: 1.25rem;
    }

    input[type="submit"] {
      padding: 0.8rem;
      cursor: pointer;
      width: 12.5rem;
      border: none;
      background-color: var(--primary-color);
      color: var(--shape);
      font-size: 1.25rem;
      margin-bottom: 0.8rem;
    }

    a {
      cursor: pointer;
      text-decoration: none;
      color: var(--text-body);
    }
  }
`;