import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);

        // console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    componentDidUpdate() {
        console.log("Component did Update");
    }

    componentWillUnmount() {
        console.log("Component will Unmount")
    }

    render() {
        // console.log("Parent render");
        return (
            <div className="m-4 p-4">
                <UserClass name="Alan Panicker" location="Nashik" social="https://www.linkedin.com/in/alan-panicker-35460a201/" />
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>This page was made by Alan Panicker aka Punisher1857☠️</h2>
//             {/* <User name="Alan Panicker" location="Nashik" social="https://www.linkedin.com/in/alan-panicker-35460a201/" /> */}
//             <UserClass name="Alan Panicker" location="Nashik" social="https://www.linkedin.com/in/alan-panicker-35460a201/" />
//         </div>
//     )
// }

export default About;