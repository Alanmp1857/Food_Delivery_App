import React from "react";
import { Link } from "react-router-dom";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        // console.log(this.props.name + "Child Constructor");
    }

    componentDidMount() {
        console.log(this.props.name + "Child Component Did Mount")
    }

    render() {
        // console.log(this.props.name + "Child render")
        return (
            <div className="user-class">
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h3>LinkedIn: <Link to="https://www.linkedin.com/in/alan-panicker-35460a201/">{this.props.social}</Link></h3>
            </div>
        )
    }
}

export default UserClass;