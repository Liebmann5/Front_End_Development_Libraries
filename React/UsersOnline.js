// Use Array.filter() to Dynamically Filter an Array
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    // Why does this work???? {null still takes up a spot in the array right???}
    const usersOnline = this.state.users.filter(user => user.online ? {user} : null);
    // key cant be {key=user} b/c that just stores the whole array!!!
    const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>); 

    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
