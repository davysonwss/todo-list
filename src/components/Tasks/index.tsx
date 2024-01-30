import { TTask } from "../../types/task";

import { Task } from "../Task";
import { Container, Header } from "./styles";

interface Props {
  tasks: TTask[]
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter((t) => t.isCompleted).length

  return (
    <Container>
      <Header>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className="text-detail">Concluídas</p>
          <span>{completedTasks} de {tasksQuantity}</span>
        </div>
      </Header>
      <ul>
        {tasks.map((t) => {
          return (
            <Task key={t.id} task={t} onDelete={onDelete} onComplete={onComplete} />
          )
        })}
      </ul>
    </Container>
  )
}