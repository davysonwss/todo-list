import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  background: var(--gray-700);
  height: 12.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: flex-start;
  }
`

export const NewTaskForm = styled.form`
  width: 100%;
  max-width: 736px;
  height: 3.375rem;

  position: absolute;
  bottom: calc(-3.375rem / 2);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  input {
    flex: 1;
    padding: 1rem;

    font-size: 1rem;

    background: var(--gray-500);
    color: var(--gray-300);
    border: 1px solid var(--gray-700);
    border-radius: 8px;

    text-transform: capitalize;

    &::placeholder {
      color: var(--gray-300, #808080);
    }

    &:first-letter {
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 1rem;

    font-size: 1rem;
    font-weight: 700;

    background: var(--blue-dark);
    color: var(--gray-100);
    border-radius: 8px;
    border: none;
  }
`
