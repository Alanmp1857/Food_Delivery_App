import { Link } from "react-router-dom";
import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div className="user">
            <h1>Count: {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Count Increase</button>
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <h3>LinkedIn: <Link to="https://www.linkedin.com/in/alan-panicker-35460a201/">{props.social}</Link></h3>
        </div>
    )
}

export default User;