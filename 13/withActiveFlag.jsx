export const withActiveFlag = (Component) => (props) => {
    const [isActive, setActive] = React.useState(false);
    
    const handleActiveChange = () => setActive(!isActive);
  
    return (
      <Component
        {...props}
        isActive={isActive}
        onActiveChange={handleActiveChange}
      />
    );
  }

  P. S. Чтобы вы понимали, HOC не значит класс-компонент. Это паттерн, который позволяет переиспользовать логику и соблюдать принцип DRY, что наглядно демонстрирует HOC с использованием новомодных hooks.

P. P. S. Кстати, некоторые hooks, используют всё тот же паттерн HOF (Higher Order Functions).