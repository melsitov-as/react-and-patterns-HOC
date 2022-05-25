import Toggle from "./toggle.jsx";

const App = () => {
  return (
    <form className="form">
      <Toggle>Включи меня</Toggle>
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById(`root`));

Представим задачу: нам нужно показать форму, в которой есть переключатель (<Toggle/>).