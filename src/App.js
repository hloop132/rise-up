import React from "react";
import ".//css/App.css";
import Horoscope from "./components/Horoscope";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  
    const Today = new Date();
  return (
    <div className="App">
       <header>
      <h1>Rise Up</h1>
    </header>
      <Login />
      <SignUp />
      <Horoscope />
      <footer>
      <p>
      Copyright &copy; {Today.getFullYear()}    
      </p>
    </footer>
    </div>
  );
}
export default App;
