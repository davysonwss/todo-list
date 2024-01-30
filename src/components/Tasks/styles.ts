import styled from 'styled-components'

export const Container = styled.div`
  margin: 5.75rem auto;
  max-width: 736px;
  width: 90%;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--blue);
    }

    .text-detail {
      color: var(--purple);
    }

    span {
      padding: 2px 0.5rem;

      font-size: 0.75rem;
      font-weight: 700;

      background: var(--gray-400);
      color: var(--gray-200);
      border-radius: 999px;
    }
  }
`

export const SectionEmptyTasks = styled.section`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  svg {
    opacity: 0.3;
  }

  div {
    margin-top: 1rem;

    p,
    span {
      font-size: 1rem;
      line-height: 1.375rem;
      text-align: center;
    }

    p {
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
    }

    span {
      font-weight: 400;
    }
  }
`
