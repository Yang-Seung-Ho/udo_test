import styled from "styled-components";

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./Routes/Home";
import Prologue from "./Routes/Prologue";
import Reservation from "./Routes/Reservation";
import Room from "./Routes/Room";
import Gallery from "./Routes/Gallery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/prologue">
          <Prologue />
        </Route>
        <Route path="/reservation">
          <Reservation />
        </Route>
        <Route path="/room">
          <Room />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
