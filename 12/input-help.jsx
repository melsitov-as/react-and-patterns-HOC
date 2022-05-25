import {withActiveFlag} from "./withActiveFlag.jsx";

const InputHelp = (props) => {
  const {isActive, onActiveChange, ...restProps} = props;

  return (
    <React.Fragment>
      <input
        type="text"
        onFocus={onActiveChange}
        onBlur={onActiveChange}
        {...restProps}
      />
      {isActive && (
        <span className="help">
          Подсказка по заполнению
        </span>
      )}
    </React.Fragment>
  );
}

export default withActiveFlag(InputHelp);

Проведём аналогичные манипуляции с полем ввода. Попробуйте поставить курсор в поле. Всё работает.

Таким образом мы разделили состояние и отображение. Первое в HOC, второе в функциональный компонент. И теперь оба компонента будет легко тестировать, поддерживать и дорабатывать.