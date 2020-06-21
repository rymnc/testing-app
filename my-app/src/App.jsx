import React from "react";
import { AppProvider } from "./Context-Provider";
import AddToDo from "./components/AddToDo";
import ToDos from "./components/ToDos";

const App = () => {
  return (
    <AppProvider>
      <AddToDo />
      <ToDos />
    </AppProvider>
  );
};

export default App;
