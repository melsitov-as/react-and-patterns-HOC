export default class Toggle extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: false
      };
      this._handleClick = this._handleClick.bind(this);
    }
  
    _handleClick() {
      this.setState((prevState) => ({isChecked: !prevState.isChecked}));
    }
  
    render() {
      const {children} = this.props;
      const {isChecked} = this.state;
  
      return (
        <div className={`toggle ${isChecked ? `toggle_checked_yes` : `toggle_checked_no`}`} onClick={this._handleClick}>{children}</div>
      );
    }
  };