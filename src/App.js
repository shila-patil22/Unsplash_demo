import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Editorial } from "./Menu/Editorial";
import { Topics } from "./Menu/Topics";
import { AppLayout } from "./AppLayout";
import { NavbarCom } from "./Navbar";
import "./App.css";
import { SearchPhoto } from "./Menu/SearchPhoto";
import { SearchCollection } from "./Menu/SearchCollection";

export default function App() {
  return (
    <Router>
      <NavbarCom />
      <AppLayout>
        <Switch>
          <Route exact path="/">
            <Editorial />
          </Route>
          <Route exact path="/t/:topics">
            <Topics />
          </Route>
          <Route exact path="/s/photos/:photo">
            <SearchPhoto />
          </Route>
          <Route exact path="/s/collections/:photo">
            <SearchCollection />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}
