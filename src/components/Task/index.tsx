import { TTask } from "../../types/task"

import { Container } from "./styles"
import { Trash } from "@phosphor-icons/react"

interface Props {
  task: TTask
}

export function Task({ task }: Props) {
  return (
    <Container>
      <div>
        <input
          type="checkbox"
        />
        <p>{task.name}</p>
      </div>
      <button type="button">
        <Trash size={18} />
      </button>
    </Container>
  )
}