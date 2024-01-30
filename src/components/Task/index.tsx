import { Container } from "./styles"
import { Trash } from "@phosphor-icons/react"

export function Task() {
  return (
    <Container>
      <div>
        <input
          type="checkbox"
        />
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      </div>
      <button type="button">
        <Trash size={18} />
      </button>
    </Container>
  )
}