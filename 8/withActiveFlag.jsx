export const withActiveFlag = (Component) => {
  return class extends React.PureComponent {
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
      return <Component />;
    }
  }
}
Для этого выстроим цепочку. Наш HOC withActiveFlag возвращает класс-компонент с общей логикой, который, в свою очередь, возвращает переданный в HOC компонент.