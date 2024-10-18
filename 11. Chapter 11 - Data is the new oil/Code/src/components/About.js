import React from "react";
// import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount")
  }

  render() {
    console.log("Parent Render")
    return (
      <div>
        <h1>About Us</h1>
        <p>Hello everyone</p>
        {/* <User /> */}
        <UserClass name={"First"} location={"Colombo"} />
        {/* <UserClass name={"Second"} location={"Colombo"} /> */}
        <div>
            <UserContext.Consumer>
                {(data) => <h1>{data.loggedInUser}</h1>}
            </UserContext.Consumer>
            </div>
      </div>
    );
  }
}
export default About;
