import { Component } from "react";
// import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor will be Called");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount Called");
  }

  render() {
    console.log("Parent Render Called");
    return (
      <>
        <h1>Hey This is About Page</h1>
        {/* <User name={"Daram"} location={"Bangalore"} /> */}
        <UserClass name={"Daram"} location={"Bangalore"} />
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
