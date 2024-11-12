import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            //This is the object of multiple state variables inside it
            count1: 0,
            count2: 2, 

            userInfo: {
                name: "User Name",
                location: "Location",
                avatar_url: "avatarURL"
            }
        }

        // console.log(this.props.name + "Child constructor")
    }

    async componentDidMount () {
        // console.log(this.props.name + "Child componentDidMount");
       
        //API Call
        const data = await fetch('https://api.github.com/users/VSupunK');
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        console.log(json);

    }

    render() {
        // const { name, location } = this.props;
        const { count1, count2 } = this.state;
        const { name, location, avatar_url } = this.state.userInfo;
        // console.log(this.props.name + "Child render")
        return (
            <div className="user-card">
                <button onClick={() => {
                    this.setState({
                        count1: this.state.count1 + 1
                    })
                }

                }>Click to increase the count</button>
                <img src={avatar_url} />
                <h2>Count = {count1}</h2>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @info4125</h4>
            </div>
        )
    }
}

export default UserClass;