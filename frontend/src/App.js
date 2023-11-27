import "./App.css";
import Button from "../src/Components/Button/Button";
import { mainColors } from "./assets/colors";

function App() {
  return (
    <div className="App">
      <Button
        bColor={mainColors.primaryColor}
        tColor={mainColors.textColor}
        text={"REGISTRATE"}
      ></Button>
    </div>
  );
}

export default App;
