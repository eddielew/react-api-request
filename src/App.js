import "./App.css";
import { Component } from "react";
import CardList from "./component/CardList";
import Search from "./component/Search";
import github from "./Utils/github";

class App extends Component {
  state = {
    users: [],
  };

  onSearch = async (term) => {
    const res = await github.get(`/users/${term}`);

    this.setState({ users: [...this.state.users, res.data] });
  };

  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch} />
        <CardList users={this.state.users} />

        <style jsx>
          {`
            .App {
              text-align: center;
            }
          `}
        </style>
        <style global jsx>
          {`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            h1,
            h2,
            h3,
            h4 {
              padding-top: 5px;
              padding-bottom: 5px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default App;
