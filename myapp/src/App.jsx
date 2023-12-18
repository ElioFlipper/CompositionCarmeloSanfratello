import { useState } from "react";
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
import { LanguageContext } from "./assets/LanguageContext";

export function App() {

  const [language, setLanguage] = useState('en')
  function handleLanguage(language) {
    setLanguage(language)
  }

  return (
    <Container title={<h1>La mia nuova app</h1>}>
      <Welcome name="Elio" eta={28} />
      <LanguageContext.Provider value={language}>
        <select name="Language" id="Language" onClick={()=>handleLanguage('it')}>Seleziona lingua
          <option value="it">Italiano</option>
          <option value="en" onClick={()=>handleLanguage('en')}>English</option>
        </select>
        <AlertClock />
      </LanguageContext.Provider>
      <br />
      <ToDo2 />

    </Container>
  )
} 