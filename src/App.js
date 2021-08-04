import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle,{themes} from './globalStyle';
import About from "./pages/About";
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

function App() {

  const [themeKey,setThemeKey] = useState('dark');

  return (
    <Router>
      <ThemeProvider theme={{themeKey,setThemeKey,...themes[themeKey]}}>
      <GlobalStyle />
      <Switch>
        <Route path="/projects/:repoName/:defaultBranch" component={ProjectDetails} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
