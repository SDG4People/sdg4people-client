import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: "loading"
    }
  }

  componentDidMount() {
    const serverUrl = "http://localhost:3000";

    fetch(serverUrl).then((response) => response.json())
      .then((results) => {
        this.setState({results});
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Sdg4People</h1>
        </header>
        <p>
          {this.state.results}
        </p>
      </div>
    );
  }
}

export default App;
