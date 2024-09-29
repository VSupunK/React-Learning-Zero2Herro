import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            //This is the object of multiple state variables inside it
            count1: 0,
            count2: 2, 
        }

        console.log(this.props.name + "Child constructor")
    }

    componentDidMount () {
        console.log(this.props.name + "Child componentDidMount");
        //API Call
    }

    render() {
        const { name, location } = this.props;
        const { count1, count2 } = this.state;
        console.log(this.props.name + "Child render")
        return (
            <div className="user-card">
                <button onClick={() => {
                    this.setState({
                        count1: this.state.count1 + 1
                    })
                }

                }>Click to increase the count</button>
                <h2>Count = {count1}</h2>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @info4125</h4>
            </div>
        )
    }
}

export default UserClass;