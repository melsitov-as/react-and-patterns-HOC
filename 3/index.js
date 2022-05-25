import Toggle from "./toggle.jsx";
import InputHelp from "./input-help.jsx";

const App = () => {
  return (
    <form className="form">
      <Toggle>Включи меня</Toggle>
      <InputHelp placeholder="Заполни меня" />
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById(`root`));

Усложняем задачу: в нашей форме появилось поле с подсказкой.