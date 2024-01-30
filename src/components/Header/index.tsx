import { Container, NewTaskForm } from "./styles"
import logoImg from '../../assets/logo.svg'
import { PlusCircle } from "@phosphor-icons/react"

export function Header() {

  return (
    <Container>
      <div>
        <img src={logoImg} />
      </div>
      <NewTaskForm>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value=""

        />

        <button type="submit" /* onClick={ } */>
          Criar
          <PlusCircle size={18} />
        </button>
      </NewTaskForm>
    </Container>
  )
}