import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get('http://185.244.129.146/api/posts').then((res) => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    console.log(this.state.posts);
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          {
            this.state.posts.map((post: any) => (
              <div>
                <h4>{ post.title }</h4>
                <small>{ post.body }</small>
              </div>
            ))
          }
        </header>
      </div>
    );
  }
}

export default App;
