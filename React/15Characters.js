// Change Inline CSS Conditionally Based on Component State
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // How does this statement run everytime???? (Ex. Before 15 chars I understand border is the black but once I pass it then we make inputStyle = to red!!! So how do we set set inputStyle back to =ing black???)
    (this.state.input.length <= 15 ? inputStyle : inputStyle = {border: '3px solid red'});
    //(this.state.input.length <= 15 ? inputStyle : inputStyle.border = '3px solid red');
    
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
