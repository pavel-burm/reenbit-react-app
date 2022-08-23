import MainPage from "./componets/MainPage";


function App(props) {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <MainPage render={props.render}/>
    </div>
  );
}

export default App;
