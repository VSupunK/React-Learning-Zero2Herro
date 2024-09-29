import User from "./User"
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Hello everyone</p>
            <User />
            <UserClass name={"Supun Kalhara"} location={"Colombo"}/>
        </div>
    )
}

export default About;