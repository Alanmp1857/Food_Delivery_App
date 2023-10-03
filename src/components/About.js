import React from "react";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);

        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }

    componentDidUpdate() {
        // console.log("Component did Update");
    }

    componentWillUnmount() {
        // console.log("Component will Unmount")
    }

    render() {
        // console.log("Parent render");
        return (
            <div className="m-4 p-4">
                <div className="text-2xl font-bold">
                    LoggedIn User Name:
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <h1 className="font-bold text-2xl">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <UserClass location="Nashik" social="https://www.linkedin.com/in/alan-panicker-35460a201/" />
            </div>
        )
    }
}

export default About;