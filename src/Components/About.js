import { Component } from "react";
import UserClass from "./UserClass";
// import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor will be Called");
  }

  async componentDidMount() {
    console.log("Parent Component Did Mount Called");
  }

  componentDidUpdate() {
    console.log("Component Did Updated");
  }

  render() {
    console.log("Parent Render Called");
    return (
      <>
        <h1>Hey This is About Page</h1>
        <UserClass name={"First Chaild"} location={"Bangalore"} />
        {/* <User /> */}
      </>
    );
  }
}

export default About;

// const About = () => {
//   return (
//     <>
//       <h1>Hey This is About Page</h1>
//       {/* <User name={"Daram"} location={"Bangalore"} /> */}
//       <UserClass name={"Daram"} location={"Bangalore"} />
//     </>
//   );
// };

// export default About;
