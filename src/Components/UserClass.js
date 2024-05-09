import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      userInfo: {
        name: "Dummy",
        location: "Bangalore",
      },
    };

    // console.log(this.props.name + "Chaild Constructor Called");
  }

  //After Completing the Constructor and Render Methods calling, the componentDidMount will be called.
  async componentDidMount() {
    console.log(this.props.name + "Chaild Component Did Mount Called");
    //API Call

    const data = await fetch("https://api.github.com/users/DaramGuru95");
    const json = await data.json();
    this.setState = {
      userInfo: json,
    };
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(this.props.name + "Chaild Render Called");
    return (
      <div className="user-card">
        {/* <h1>Count:{count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increase
        </button> */}
        {/* <button
          onClick={() => {
            this.setState({ count: count - 1 });
          }}
        >
          Decrease
        </button> */}
        <img src={avatar_url} />
        <h3>Name:{name} </h3>
        <h4>Location: {location}</h4>
        <h5>Contact: xyz</h5>
      </div>
    );
  }
}

export default UserClass;
