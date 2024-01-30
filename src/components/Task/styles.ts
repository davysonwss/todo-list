import styled from 'styled-components'

export const Container = styled.li`
  min-height: 4.5rem;
  list-style-type: none;
  display: flex;
  gap: 0.75rem;

  padding: 1rem;

  border: 1px solid var(--gray-400);
  background: var(--gray-500);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  div {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 0.75rem;

    input[type='checkbox'] {
      appearance: none;
      -webkit-appearance: none;
      width: 1.5em;
      height: 1.5em;

      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      background: transparent;
      border-radius: 50%;
      border: 2px solid var(--blue);
      color: var(--gray-100);
      outline: none;
      cursor: pointer;
    }

    p {
      font-size: 0.875rem;
      color: var(--gray-100);

      &:first-letter {
        text-transform: uppercase;
      }
    }
  }

  &.completed > div p {
    color: var(--gray-300);
    text-decoration-line: line-through;
  }

  &.completed > div input[type='checkbox'] {
    background-color: var(--purple-dark);
    border: none;
  }

  & + li {
    margin-top: 1.75rem;
  }

  button {
    background: none;
    border: none;
    color: var(--gray-300);
  }
`
