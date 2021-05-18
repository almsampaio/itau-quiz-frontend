import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 68vh;
  margin-left: 24.5rem;

  & > div {
    position: relative;
    display: grid;
    align-items: start;
    justify-content: center;
    width: 46.875rem;
    height: 25rem;
    background-color: var(--shape);
    border-radius: 10px;

    button.close-btn {
      position: absolute;
      top: 0;
      right: 0;
      border: none;
      background-color: transparent;

      img {
        width: 2rem;
        margin: 1.5rem;
      }
    }

    h1 {
      justify-self: center;
      margin-top: 7.5rem;
      font-size: 3.125rem;
      font-weight: 700;
      line-height: 3rem;
      letter-spacing: 0.03125rem;
    }

    div.buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;

      button,
      a {
        text-decoration: none;
        padding: 0.8rem 2rem;
        cursor: pointer;
        border: none;
        background-color: var(--input-focus);
        color: var(--text-body);
        font-size: 1.25rem;
        margin: 0 1.875rem;
        border-radius: 6px;
        font-weight: 600;

        &.download {
          background-color: var(--primary-color);
          color: var(--shape);
          position: relative;
        }
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
