// Manage State Locally First
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here
  /*func handleChange(event) {
    this.state.input = state.event.input;
    return input;
  }*/
  handleChange(event) {
    this.setState({ input: event.target.value,
      //??? I have no idea why this is here???
      messages: this.state.messages
    });
  }

  /*function submitChange() {
    messages = [...messages.append(input)];
    this.state.input = '';
    return messages;
  }*/
  submitMessage(event) {
    //event.preventDefault();
    //this.setState({ messages: [...messages.append(this.state.input)] });
    this.setState({ input: '', messages: [...this.state.messages, this.state.input] });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input value={this.state.input} /*onChange={this.handleChange}*/ onChange={this.handleChange.bind(this)}></input>
        <button /*type='submit'*/ onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>
          {this.state.messages.map((x, i) => { return <li key={i}>{i}{x}</li> })}
        </ul>
        
      </div>
    );
  }
};
