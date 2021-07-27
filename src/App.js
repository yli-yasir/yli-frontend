import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle,{themes} from './globalStyle';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

function App() {

  const [themeName,setThemeName] = useState('dark');

  return (
    <Router>
      <ThemeProvider theme={{setThemeName,...themes[themeName]}}>
      <GlobalStyle />
      <Switch>
        <Route path="/projects/:id" component={ProjectDetails} />
        <Route path="/" component={Home} />
      </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
