import { AlertClock } from "./AlertClock";
import { Color } from "./Color";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { ToDoList } from "./ListsAndState";
import { ToDo } from "./ToDo";
import { ToDo2 } from "./ToDoProva";
import { Welcome } from "./Welcome";


export function App() {
  return (
    <Container title = {<h1>La mia nuova app</h1>}>
      <Welcome name="Elio" eta={28} />
      <AlertClock/>
      <br />
      <ToDo2 />

    </Container>
  )
} 