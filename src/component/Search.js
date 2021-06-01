import React from "react";

function Search() {
  return (
    <div>
      <div className="ui fluid action input _search">
        <input type="text" placeholder="Search..." />
        <div className="ui button">Add Github User</div>
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

export default Search;
