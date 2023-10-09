const Contact = () => {
    return (
        <div className="m-4 p-4">
            <h1 className="text-2xl font-bold">Contact Us Page.</h1>
            <form>
                <input type="text" className="m-2 p-2 border border-black rounded-lg" placeholder="Name" />
                <input type="text" className="m-2 p-2 border border-black rounded-lg" placeholder="Message" />
                <button className="m-2 p-2 bg-black text-white shadow-lg rounded-lg hover:bg-gray-700">Submit</button>
            </form>
        </div>
    )
}

export default Contact;