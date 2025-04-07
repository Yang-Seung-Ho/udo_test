import { BrowserRouter, Route, Switch } from "react-router-dom";
import Experience from "./Routes/Experience";
import Main from "./Routes/Main";
import Prologue from "./Routes/Prologue";
import Reservation from "./Routes/Reservation";
import Room from "./Routes/Room";
import Story from "./Routes/Story";
import Location from "./Routes/Location";
// import Tour from "./Routes/Tour";
import Restaurants from "./Routes/Restaurants";
import Places from "./Routes/Places";
import MenuBar from "./Components/MenuBar";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ScrollToTop />
          <Main />
        </Route>
        <Route path="/prologue">
          <MenuBar />
          <ScrollToTop />
          <Prologue />
        </Route>
        <Route path="/story">
          <MenuBar />
          <ScrollToTop />
          <Story />
        </Route>
        <Route path="/location">
          <MenuBar />
          <ScrollToTop />
          <Location />
        </Route>
        <Route path="/experience">
          <MenuBar />
          <ScrollToTop />
          <Experience />
        </Route>
        <Route path="/room">
          <MenuBar />
          <ScrollToTop />
          <Room />
        </Route>
        <Route path="/reservation">
          <MenuBar />
          <ScrollToTop />
          <Reservation />
        </Route>
        <Route path="/tour">
          <MenuBar />
          <ScrollToTop />
          <Places />
        </Route>
        <Route path="/places">
          <MenuBar />
          <ScrollToTop />
          <Places />
        </Route>
        <Route path="/restaurants">
          <MenuBar />
          <ScrollToTop />
          <Restaurants />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
