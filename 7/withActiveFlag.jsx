export const withActiveFlag = (Component) => {
  class ActiveFlag extends React.PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        isActive: false
      };
      
      this._handleActiveChange =
        this._handleActiveChange.bind(this);
    }
  
    _handleActiveChange() {
      this.setState(
        (prevState) => ({isActive: !prevState.isActive})
      );
    }
  
    render() {
      return null;
    }
  }
  
  return <Component />;
}

Раз нам нужно состояние, то заводим класс-компонент. Здесь же метод-обработчик.

Теперь нам осталось соединить компонент, который передают снаружи, с класс-компонентом, который объявлен внутри и реализует общую логику по хранению и работе с состоянием.