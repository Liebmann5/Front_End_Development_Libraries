// Render Conditionally from Props
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* calling fiftyFifty returns a boolean */}
    return <h1>{this.props.fiftyFifty ? "You Win!" : "You lose!"}</h1>;
    
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Complete the return statement:
      return {
        counter: this.state.counter + 1
      }
    });
  }
  render() {
    const expression = (Math.random() >= .5); // Another way is below
    // const expression = Math.random() >= 0.5 ? true : false

    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        // Render the Results component as a child of GameOfChance, and pass in expression as a prop called fiftyFifty
        <Results fiftyFifty={expression} />
        
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
