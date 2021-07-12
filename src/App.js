import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";
import { makeStyles } from '@material-ui/core/styles';   
import Image from './pexels-eberhard-grossgasteiger-1366921.jpg';

const useStyles = makeStyles(theme => ({
  app: { 
    backgroundImage:`url(${Image})`,
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    position: 'relative',
    fontFamily: [
      'Helvetica',
    ].join(','),
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
