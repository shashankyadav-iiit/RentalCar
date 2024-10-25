import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';



export default function Footer() {


    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Get in Touch */}
                    <div>
                        <h2 className="text-green-400 text-lg font-semibold mb-4">Get in touch</h2>
                        <p className="text-gray-400">KM 31 Jaypee kosmos Noida Uttar pradesh 201304</p>
                        <p className="text-gray-400 mt-2">
                            <span role="img" aria-label="phone">📞</span> 7355442475
                        </p>
                        <p className="text-gray-400 mt-1">
                            <span role="img" aria-label="phone">📞</span> 7983748050
                        </p>
                        <p className="text-gray-400 mt-1">
                            <span role="img" aria-label="email">✉️</span> info@gofleet.com
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h2 className="text-green-400 text-lg font-semibold mb-4">Useful Links</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li>Accident and Theft</li>
                            <li>
                                <Link to={'/terms-condition'}>Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-green-400 text-lg font-semibold mb-4">Quick Links</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/about'}>About</Link>
                            </li>
                            <li>
                                <Link to={'/listed-cars'}> Listed Car</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>Contact</Link>
                            </li>
                            <li>
                                <Link to={'/attatch-your-car'}>Attach your car</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h2 className="text-green-400 text-lg font-semibold mb-4">Subscribe</h2>
                        <form>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-2 rounded-md bg-gray-700 text-gray-300 mb-4"
                            />
                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-md"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-gray-400 text-sm text-center">
                    <div className="flex justify-center space-x-6 mb-4">
                        {/* Social Media Icons */}
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-square text-green-400 text-2xl"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter text-green-400 text-2xl"></i>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube text-green-400 text-2xl"></i>
                        </a>
                    </div>

                    <p>Copyright © 2024 GoFleet | Design & Development by Shashank</p>
                </div>
            </div>
        </footer>
    );
}