import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

function App() {
  return (
    <div>
      <NavBar  />
      <Home name = "Liza" city = "New York" color = "firebrick" />
      <About bio = "I made this!" github = "https://github.com/liza" linkedin = "https://www.linkedin.com/in/liza/" />
      <Links github ="https://github.com/liza" linkedin = "https://www.linkedin.com/in/liza/" />
      </div>
  );
}

export default App;