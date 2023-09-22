import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <center><h1>Oops!!!</h1></center>
            <center><h2>Something went wrong!</h2></center>
            <center><img src="https://media.istockphoto.com/id/479368302/photo/sad-labrador-retriever-in-grass.jpg?s=612x612&w=0&k=20&c=xrJx30VeCXudX88Nbn-aS4hoeQgFtC8UZHLpzUBzWXY=" alt="" /></center>
        </div>
    )
}

export default Error;