import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GlobalStyle from './globalStyle';

import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/projects/:id" component={ProjectDetails} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
