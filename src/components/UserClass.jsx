import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <h3>Username: {this.props.name}</h3>
        <h4>Location: {this.props.location}</h4>
      </div>
    );
  }
}

export default UserClass;

/*

1. How to create class based component in react
2. How to pass props to that class based component.
*/
