import "./app.scss";
import React, { Component } from 'react';
import { Button } from "carbon-components-react";
import { Content } from "carbon-components-react/es/components/UIShell";
import TutorialHeader from "./components/TutorialHeader";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import RepoPage from "./content/RepoPage";

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Button>Button</Button>
        </Content>
      </>
    );
  }
}

export default App;
