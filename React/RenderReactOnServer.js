// Render React on the Server with renderToString
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// You pass a class to .renderToString() just like you would pass a component to a render method
ReactDOMServer.renderToString(<App />);
