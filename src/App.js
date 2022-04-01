import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Splash from "./screens/Splash";
import Home from "./screens/Home";
import Academy from "./screens/Academy";
import Security from "./screens/Security";
import Software from "./screens/Software";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Splash />
        </Route>

        <Route path="/home" exact>
          <Home />
        </Route>

        <Route path="/academy" exact>
          <Academy />
        </Route>

        <Route path="/security" exact>
          <Security />
        </Route>

        <Route path="/softwares" exact>
          <Software />
        </Route>

      </Switch>
    </Router>
    );
}

export default App;
