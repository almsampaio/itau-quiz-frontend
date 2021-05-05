import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.5625rem 2.3125rem;
  border: 2px solid var(--primary-color);
  border-radius: 6px;
  margin-bottom: 3.125rem;

  display: grid;
  grid-template-columns: minmax(300px, 3fr) minmax(200px, 1fr);
  gap: 3.75rem;

  @media (max-width: 1450px) {
    grid-template-columns: 100%;
    grid-template-rows: 2fr 1fr;
  }
`;

export const IndexAndQuestion = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3.125rem minmax(0, 1fr);
  gap: 3.75rem;
  align-items: end;
  margin-bottom: 3.125rem;

  p {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.45rem 0.65rem;
    background-color: var(--input-focus);
    border: 1px solid var(--input-border);
    border-radius: 6px;
  }

  div {
    input {
      margin-bottom: 0;
    }
  }
`;

export const OptionsAndDescriptions = styled.div`
  min-width: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 9rem 5.6rem minmax(0, 1fr);
  gap: 4.25rem;

  & > div {
    display: grid;
    grid-template-rows: auto 3.125rem 3.125rem;
    row-gap: 1.8rem;

    p {
      margin: 0 0 -1.25rem 0.9rem;
    }
  }

  div.description {
    div {
      display: flex;
      align-items: center;
      justify-content: left;
      padding: 1rem;
      background-color: var(--primary-color);
      border-radius: 6px;
      border: 1px solid var(--input-border);
      color: var(--shape);
      font-weight: bold;
      font-size: 1.125rem;
    }
  }

  div.options {
    label {
      max-width: 3rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      background-color: var(--input-background);
      border-radius: 6px;
      border: 2px solid var(--primary-color);
      font-weight: bold;
      font-size: 1.125rem;
    }
  }

  div.feedbacks {
    div {
      min-width: 0;
    }

    input {
      margin: 0;
    }
  }
`;

export const RadioBox = styled.label`
  img {
    display: none;
    width: 2rem;
  }

  &.active {
    img {
      display: block;
    }
  }
`;
