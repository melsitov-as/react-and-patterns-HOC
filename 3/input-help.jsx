export default class InputHelp extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isFocused: false
      };
      this._handleFocus = this._handleFocus.bind(this);
      this._handleBlur = this._handleBlur.bind(this);
    }
  
    _handleFocus() {
      this.setState({isFocused: true});
    }
  
    _handleBlur() {
      this.setState({isFocused: false});
    }
  
    render() {
      const {...props} = this.props;
      const {isFocused} = this.state;
  
      return (
        <React.Fragment>
          <input type="text" onFocus={this._handleFocus} onBlur={this._handleBlur} {...props} />
          {isFocused && (
            <span className="help">
              Подсказка по заполнению
            </span>
          )}
        </React.Fragment>
      );
    }
  };