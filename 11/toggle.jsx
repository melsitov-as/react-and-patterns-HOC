import {withActiveFlag} from "./withActiveFlag.jsx";

const Toggle = (props) => {
  return (
    <div
      className={
        `toggle ${props.isActive
        ? `toggle_checked_yes`
        : `toggle_checked_no`}`
      }
      onClick={props.onActiveChange}
    >
      {props.children}
    </div>
  )
};

export default withActiveFlag(Toggle);

Обернём наш компонент в HOC и используем пропсы, которые передаёт HOC. Попробуйте кликнуть по «Включи меня». Всё работает.