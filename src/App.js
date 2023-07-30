import "./App.css";

import ToolTip from "./ToolTip";

function App() {
  return (
    <div className="App">
      {/* ToolText prop: Text to be displayed in the tooltip */}
      {/* position prop: The position of the tooltip (top, bottom, right, left) */}
      <ToolTip ToolText="This click will delete all content" position="top">
        {/* Button element inside the ToolTip component */}
        <button className="button">Delete All</button>
      </ToolTip>
    </div>
  );
}

export default App;
