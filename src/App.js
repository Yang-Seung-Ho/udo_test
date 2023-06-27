import { BrowserRouter, Route, Switch } from "react-router-dom";
import Experience from "./Routes/Experience";
import Home from "./Routes/Home";
import Prologue from "./Routes/Prologue";
import Reservation from "./Routes/Reservation";
import Room from "./Routes/Room";
import Main from "./Routes/Main";
import Story from "./Routes/Story";
import Location from "./Routes/Location";
import Tour from "./Routes/Tour";
import Restaurants from "./Routes/Restaurants";
import Places from "./Routes/Places";
import MenuBar from "./Components/MenuBar";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <ScrollToTop />
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/prologue">
          <Prologue />
        </Route>
        <Route path="/story">
          <Story />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/room">
          <Room />
        </Route>
        <Route path="/reservation">
          <Reservation />
        </Route>
        <Route path="/tour">
          <Tour />
        </Route>
        <Route path="/places">
          <Places />
        </Route>
        <Route path="/restaurants">
          <Restaurants />
        </Route>{" "}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
