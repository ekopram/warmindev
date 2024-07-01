import { useState } from "react";
import "./App.css";
import Menu from "./pages/Menu";
import Topbar from "./component/Topbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Topbar />
      <Menu />
    </>
  );
}

export default App;
