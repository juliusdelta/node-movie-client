import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
    state = {data: []}
    componentDidMount() {
        axios.get('https://imdb-node-uiqsphbxis.now.sh/movies')
            .then((res) => {
                this.setState({data: res.data})
            })
            .catch((err) => console.error(err))
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            { this.state.data.map((movie) => movie.title) }
        </p>
      </div>
    );
  }
}

export default App;
