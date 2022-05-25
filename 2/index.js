import Toggle from "./toggle.jsx";

const App = () => {
  return (
    <form className="form">
      <Toggle>Включи меня</Toggle>
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById(`root`));

Он может быть только в двух состояниях — вкл и выкл. Поэтому заведём ему состояние с булевым флагом. Попробуйте кликнуть.