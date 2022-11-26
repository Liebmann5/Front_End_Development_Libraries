//Use the Lifecycle Method componentDidMount
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 5000);
  }
  render() {
    return (
      <div>
        {/* render method, render the value of activeUsers in the h1 after the text Active Users: */}
        <h1>Active Users: {this.state.activeUsers}</h1>
        
      </div>
    );
  }
}
