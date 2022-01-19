import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Editorial } from "./Menu/Editorial";
import { Topics } from "./Menu/Topics";
import { AppLayout } from "./AppLayout";
import { NavbarCom } from "./Navbar";
import { SearchPhoto } from "./Menu/SearchPhoto";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import {  CollectionPhotosDisplay } from "./Menu/CollectionPhotosDisplay";

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
            <SearchPhoto isPhoto/>
          </Route>
          <Route exact path="/s/collections/:photo">
            <SearchPhoto/>
          </Route>
          <Route exact path="/collections/:id">
            <CollectionPhotosDisplay/>
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}
