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

    p {
      font-size: 0.875rem;
      color: var(--gray-100);

      &:first-letter {
        text-transform: uppercase;
      }

      &.taskCompleted {
        text-decoration: line-through;
        color: var(--gray-300);
      }
    }
  }

  &.completed > div p {
    color: var(--gray-300);
    text-decoration-line: line-through;
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

export const BtnChecked = styled.button`
  min-width: 1.125rem;
  height: 1.125rem;
  background: none;
  border: none;

  div {
    width: 100%;
    height: 100%;
    border: 2px solid var(--blue);
    border-radius: 50%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`
