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

Подсказка видна только при фокусе в поле. Поэтому заведём в компоненте состояние.

На этот раз потребуется два обработчика — для фокуса и для расфокуса (блюра). Попробуйте поставить курсор в поле.