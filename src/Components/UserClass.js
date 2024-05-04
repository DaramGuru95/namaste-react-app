import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Chaild Constructor Called");
  }

  componentDidMount() {
    console.log("Chaild Component Did Mount Called");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log("Chaild Render Called");
    return (
      <div className="user-card">
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            this.setState({ count: count - 1 });
          }}
        >
          Decrease
        </button>
        <h3>Name:{name} </h3>
        <h4>Location: {location}</h4>
        <h5>Contact: xyz</h5>
      </div>
    );
  }
}

export default UserClass;
