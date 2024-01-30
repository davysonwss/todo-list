import { ChangeEvent, FormEvent, useState } from "react"

import { Container, NewTaskForm } from "./styles"

import logoImg from '../../assets/logo.svg'
import { PlusCircle } from "@phosphor-icons/react"

interface Props {
  onAddTask: (taskName: string) => void
}

export function Header({ onAddTask }: Props) {
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    onAddTask(name)
    setName("")
  }

  function onChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  return (
    <Container>
      <div>
        <img src={logoImg} />
      </div>
      <NewTaskForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeName}
          value={name}
        />

        <button type="submit">
          Criar
          <PlusCircle size={18} />
        </button>
      </NewTaskForm>
    </Container>
  )
}