import "./App.css";
import CardList from "./component/CardList";
import Search from "./component/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <CardList />

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

export default App;
