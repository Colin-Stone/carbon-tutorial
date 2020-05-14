import "./app.scss";
import React, { Component } from 'react';
import { Button } from "carbon-components-react";
import { Content } from "carbon-components-react/es/components/UIShell";
import TutorialHeader from "./components/TutorialHeader";

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
