import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Hero from "./components/Hero/Hero";


function App() {
  return (
    <div className="">
      <Header />

      <Routes>
        <Route exact path="/" />
        <Route path="/" />
        <Route path="/Cart" />
      </Routes>
      <Hero />
    </div>
  );
}

export default App;
