import { TTask } from "../../types/task"

import { Container } from "./styles"
import { Trash } from "@phosphor-icons/react"

interface Props {
  task: TTask
  onDelete: (taskId: string) => void
}

export function Task({ task, onDelete }: Props) {
  return (
    <Container>
      <div>
        <input
          type="checkbox"
        />
        <p>{task.name}</p>
      </div>
      <button type="button" onClick={() => onDelete(task.id)}>
        <Trash size={18} />
      </button>
    </Container>
  )
}