import { React, Component, createRef } from "react";

class Search extends Component {
  state = {
    value: "",
  };

  constructor(props) {
    super(props);

    this.inputRef = createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <div className="ui fluid action input _search">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.value}
            ref={this.inputRef}
            onChange={(e) => {
              this.setState({ value: e.target.value });
            }}
          />
          <div
            className="ui button"
            onClick={() => {
              this.props.onSearch(this.state.value);
            }}
          >
            Add Github User
          </div>
        </div>

        <style jsx>
          {`
            ._search {
              padding: 20px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Search;
