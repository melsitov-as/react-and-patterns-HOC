const Toggle = (props) => {
    return (
      <div
        className={
          `toggle ${props.isChecked
          ? `toggle_checked_yes`
          : `toggle_checked_no`}`
        }
        onClick={() => {}}
      >
        {props.children}
      </div>
    )
  };
  
  export default Toggle;

  Теперь разберёмся, как его применять. Для этого превратим наш <Toggle/> в функциональный компонент, потому что state теперь будет в HOC, а данные приходить пропсами (с ними разберёмся на следующем шаге, пока что поставим заглушки).