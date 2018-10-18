import React, { Component } from 'react';
import {DivContainer} from "./components/containers/container";
import Page from "./components/home/main";

class App extends Component {
  render() {
    return (
        <DivContainer>
            <Page />
        </DivContainer>
    );
  }
}

export default App;
