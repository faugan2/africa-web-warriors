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
import Profile from "./screens/Profile";
import Mentions from "./screens/Mentions";
import Terms from "./screens/Terms";

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

        <Route path="/profile" exact>
          <Profile />
        </Route>

        <Route path="/mentions" exact>
          <Mentions />
        </Route>

        <Route path="/terms-conditions" exact>
          <Terms />
        </Route>

      </Switch>
    </Router>
    );
}

export default App;
