import React from "react"
import Header from "../header/Header"
import Main from "../main/Main"
import UserContextProvider from "../../context/userContext";



function App() {
  return (
    <div className="App">
      <UserContextProvider >
        <Header />
        <Main />
      </UserContextProvider>
    </div>
  );
}

export default App;
