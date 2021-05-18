import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  label {
    display: block;
    width: 23rem;
    padding-left: 1rem;
    font-size: 1.1rem;
  }

  input,
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

    &::placeholder {
      color: var(--text-body);
    }
  }

  &.file-input {
    input {
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23FF9738FF' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
      border: none;
    }
  }
`;
