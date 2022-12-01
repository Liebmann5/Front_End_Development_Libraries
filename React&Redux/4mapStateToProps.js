// Map State to Props
const state = [];

/* Passing an array as state to mapStateToProps should return this array assigned to a key of messages */
const mapStateToProps = (state) => {
  return { messages: state };
}
