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
import { FetchData } from "./GitHubUser";
import { Link, Route, Routes } from "react-router-dom";
import { GithubuserList } from "./GithubuserList";
import { GetUsers } from "./GithubUsers";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {

  return (
    <Routes>
      <Route path="users" element={<GithubuserList />}>
        <Route index element={<p>Add a user and select it</p>}></Route>
        <Route path=":username" element={ <ShowGithubUser />}></Route>
      </Route>
    </Routes>)
} 