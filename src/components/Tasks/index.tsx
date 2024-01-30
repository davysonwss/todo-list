import { Container, Header } from "./styles";

export function Tasks() {
  return (
    <Container>
      <Header>
        <div>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>

        <div>
          <p className="text-detail">Concluídas</p>
          <span>2 de 10</span>
        </div>
      </Header>
    </Container>
  )
}