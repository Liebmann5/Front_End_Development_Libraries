class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    
  }
  handleChange (event) {
    this.setState( {input: event.target.value} );
  };
  
  render() {
    return (
      <div>
        {/* So what’s happening here is text updates from the browser; NOT the state! So we’ll need to add a value attribute and set 
        it to 'this.state.input'. Once added to the input element the input will get controlled by the state. */}
        <input value={this.state.input} onChange={this.handleChange}></input>
        
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

{/*It can be a bit hard to digest but to make things further clear try removing the entire onChange thing so your code looks like this

<input value = {this.state.input}/>
Now run the tests again are you able to type anything?

The answer to it will be “NO” since your input box is getting value from the state variable input since there is no change in the
state input(an empty string initially) which will only happen when you trigger the function handleChange() which will only happen when
you have an event handler like onChange() hence the string inside the input box will remain as it is i.e, an empty string.*/}
