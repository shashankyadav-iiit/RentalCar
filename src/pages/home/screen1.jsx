

export default function Screen1(){


    return (
        <div className="relative car-container">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
                <div className="bg-gray-900 text-white text-sm rounded-full px-4 py-2 mb-2">
                    <i className="fas fa-check-circle"></i> 100% car rental platform
                </div>
                <h1 className="text-white text-4xl md:text-5xl font-bold mb-2"> Find your best</h1>
                <h2 className="text-green-400 text-5xl md:text-5xl font-bold">Dream car for rental</h2>
            </div>
        </div>
    );
}