import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import classes from './App.module.css';
import Projects from './components/Projects/Projects';
import AboutMyself from './components/AboutMyself/AboutMyself';
import Layout from './hoc/Layout/Layout';
import MyFooter from './UI/Footer/Footer';

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <AboutMyself />
            </Route>
            <Route path="/projects" component={Projects} />
          </Switch>
          <MyFooter />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
