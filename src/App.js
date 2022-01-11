import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Editorial } from "./Menu/Editorial";
import { Topics } from "./Menu/Topics";
import { NavlinkRender } from "./Menu/NavlinkRender";
import "./App.css";
import { Demo } from "./Menu/Demo";
import { AppLayout } from "./AppLayout";

export default function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route exact path="/">
          <>
          <NavlinkRender />
            <Editorial />
          </>
          </Route>
          <Route exact path="/t/:topics">
            <Topics />
          </Route>
          <Route exact path="/demo">
            <Demo />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}
