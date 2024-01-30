import { TTask } from "../../types/task"

import { Container, BtnChecked } from "./styles"
import { Trash } from "@phosphor-icons/react"

import checkedIcon from '../../assets/checked-icon.png'

interface Props {
  task: TTask
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Task({ task, onDelete, onComplete }: Props) {

  return (
    <Container>
      <div>
        <BtnChecked onClick={() => onComplete(task.id)}>
          {
            task.isCompleted ?
              <img src={checkedIcon} /> :
              <div></div>
          }
        </BtnChecked>

        <p className={
          task.isCompleted ? 'taskCompleted' : ""
        }>{task.name}</p>
      </div>
      <button type="button" onClick={() => onDelete(task.id)}>
        <Trash size={18} />
      </button>
    </Container>
  )
}