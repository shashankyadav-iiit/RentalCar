import { Link } from "react-router-dom";

export default function Navbar() {


    return (
        <nav className="bg-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <h2 className="text-white text-2xl font-bold">
                            <Link to={'/'}>GoFleet</Link>
                        </h2>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link to={'/'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium mr-3">
                        Home
                        </Link>
                        <Link to={'/about'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                        About
                        </Link>
                        <Link to={'/listed-cars'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                        Listed Cars
                        </Link>
                        <Link to={'/attatch-your-car'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                        Attatch Your Car
                        </Link>
                        <Link to={'/contact'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                        Contact
                        </Link>
                        <Link to={'/terms-condition'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                        Terms's and Condition
                        </Link>
                        <Link to={'/company-policy'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                        Company Policy
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    );
}