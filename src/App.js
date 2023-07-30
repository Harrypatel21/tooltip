import "./App.css";
import ToolTip from "./ToolTip";

function App() {
  return (
    <div className="App">
      <ToolTip ToolText="This click will delete all content" position="top">
        <button className="button">Delete All </button>
      </ToolTip>
    </div>
  );
}

export default App;
