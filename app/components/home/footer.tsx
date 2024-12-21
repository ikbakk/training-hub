import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container p-8 px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* About RAYVN */}
          <div>
            <h2 className="text-lg font-bold mb-4">ABOUT TRANSFORM TRAINING</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Benefits
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Notifications
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Product updates
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Next of Kin Center
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Our latest videos
                </Link>
              </li>
            </ul>
          </div>

          {/* Who Uses RAYVN */}
          <div>
            <h2 className="text-lg font-bold mb-4">
              WHO USES TRANSFORM TRAINING
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Transportation
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Energy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Event/Security
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Aquafarming
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-lg font-bold mb-4">COMPANY</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Events
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  About us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  Privacy & Security
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-300">
                  System status
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-lg font-bold mb-4">FOLLOW US</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="flex items-center gap-2 hover:text-gray-300"
                >
                  <svg className="w-5 h-5" fill="currentColor">
                    {/* Custom Facebook Icon */}
                  </svg>
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center gap-2 hover:text-gray-300"
                >
                  <svg className="w-5 h-5" fill="currentColor">
                    {/* Custom LinkedIn Icon */}
                  </svg>
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center gap-2 hover:text-gray-300"
                >
                  <svg className="w-5 h-5" fill="currentColor">
                    {/* Custom Twitter Icon */}
                  </svg>
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center gap-2 hover:text-gray-300"
                >
                  <svg className="w-5 h-5" fill="currentColor">
                    {/* Custom Instagram Icon */}
                  </svg>
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center gap-2 hover:text-gray-300"
                >
                  <svg className="w-5 h-5" fill="currentColor">
                    {/* Custom YouTube Icon */}
                  </svg>
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-4">
              <button className="bg-zinc-800 text-white px-6 py-2 rounded-full flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                ISO CERTIFIED
              </button>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                SUPPORT
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2">
                <span className="w-6 h-6">🇬🇧</span>
                English
              </button>
              <button className="flex items-center gap-2 text-gray-400">
                <span className="w-6 h-6">🇳🇴</span>
                Norsk
              </button>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-gray-400">
            Copyright © 2023 RAYVN AS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
