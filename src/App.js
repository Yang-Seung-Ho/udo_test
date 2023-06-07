import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Routes/Home";
import Prologue from "./Routes/Prologue";
import Reservation from "./Routes/Reservation";
import Room from "./Routes/Room";
import Gallery from "./Routes/Gallery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Routes/Main";
import MenuBar from "./Components/MenuBar";
function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/prologue">
          <Prologue />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
