import { StrictMode } from "react";
import ReactDOM from "react-dom";
//css
import "./index.css";
import App from "./App";
import { fighters } from "./fighters";
import Fighter from "./Fighter";

function FighterList() {
  return (
    <section className="fighterlist">
      <Head />
      {fighters.map((fighter) => {
        //const { img, name, weight } = fighter;
        return <Fighter key={fighter.id} fighter={fighter}></Fighter>;
      })}
    </section>
  );
}

const Head = () => <h1>UFC Champions</h1>;

ReactDOM.render(<FighterList />, document.getElementById("root"));
