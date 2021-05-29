import './App.css';
import Home from './component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';
import TeamDetail from './component/TeamDetail/TeamDetail';


function App() {
 
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path="/Team/:teamId">
          <TeamDetail/>
        </Route>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
