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
import { GetUsers } from "./GitHubUsers";
import { HookCounter } from "./useCounter";
import { InputFunction } from "./useInput";
import { GithubUser } from "./GitHubUser";

export function App() {

  return (
    <div>
      <GithubUser username="elioflipper" />
    </div>

  )
} 