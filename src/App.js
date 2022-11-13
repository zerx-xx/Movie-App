import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = () => {
  
  return (
    <Router>
      <Switch>

        <Route path="/movie/detail/:id">
          <Detail />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  ) ; 
} ; 

export default App;
