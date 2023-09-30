const Shimmer = () => {
    const divs = Array(25).fill().map((_, index) => (
        <div key={index} className="mt-20 mb-4 mx-2 p-4 w-56 h-80 bg-gray-200 hover:bg-gray-300 rounded-lg"></div>
    ));

    return <div className="flex flex-wrap items-center justify-center">
        {divs}
    </div>
}

export default Shimmer;