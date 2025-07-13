import { useState, useRef, useEffect } from "react";
import { FaBars, FaBell } from "react-icons/fa"
export default function Navbar() {
    const [showDesktopNotifications, setShowDesktopNotifications] = useState(false);
    const [showMobileNotifications, setShowMobileNotifications] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const desktopNotifRef = useRef(null);
    const mobileNotifRef =useRef(null);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (desktopNotifRef.current && !desktopNotifRef.current.contains(event.target)) {
                setShowDesktopNotifications(false);

            }
            if (mobileNotifRef.current && !mobileNotifRef.current.contains(event.target)) {
                setShowMobileNotifications(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.conatain(event.target)) {
                setShowMobileMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
    return (
        <>
        <header className="hidden md:block bg-white shadow-sm">
            <div className="flex items-center justify-between px-8 py-4">
                <div>
                    <h1 className="text-2xl font-bold text-dark">Student Dashboard</h1>
                    <p className="text-gray-600">Welcome back, Emma!</p>

                </div>
                <div className="relative">
                    <button className="p-2 text-gray-600 hover:text-primary relative"
                    onClick={() => setShowDesktopNotifications(!showDesktopNotifications)}>
                        <FaBell></FaBell>
                        <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center"></span>
                    </button>
                    {showDesktopNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                        <div className="p-4 border-b border-gray-200">
                            <h3 className="font-bold text-lg">Notifications</h3>
                        </div>
                        <div className="max-h-80 overflow-y-auto">
                            <template >
                                <div className="p-4 border-b border-gray-100 hover:bg-gray-50 transition">
                                    <div className="flex">
                                        <div className="mr-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                <FaBell className="text-blue-500"></FaBell>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold "></h4>
                                            <p className="text-sm text-gray-600 mb-1"></p>
                                            <p className="text-xs text-gray-500"></p>
                                        </div>
                                    </div>
                                </div>

                            </template>

                        </div>
                        <div className="p-3 text-center bg-gray-50">
                            <button className="text-primary font-medium">View All Notifications</button>
                        </div>

                    </div>
                    )}

                </div>
                <div className="relative">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-dashed">
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-white"></span>
                        </div>

                    </div>
                </div>

            </div>
        </header>
        <header className="md:hidden bg-white shadow-sm sticky top-0 z-20">
        <div className="flex items-center justify-between px-4 py-3">
          <div ref={mobileMenuRef}>
            <button 
              className="text-gray-600 p-2"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
            
            {showMobileMenu && (
              <div className="absolute left-0 mt-2 w-full bg-white shadow-lg border-t border-gray-200 z-10">
                <div className="p-4 border-b border-gray-200">
                  <h1 className="text-xl font-bold text-dark">Student Dashboard</h1>
                  <p className="text-gray-600">Welcome back, Emma!</p>
                </div>
                {/* Mobile menu items would go here */}
              </div>
            )}
          </div>
          
          <div className="flex items-center">
            <div className="relative mr-4" ref={mobileNotifRef}>
              <button 
                className="p-2 text-gray-600 relative"
                onClick={() => setShowMobileNotifications(!showMobileNotifications)}
              >
                <FaBell className="text-xl" />
                <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                  3
                </span>
              </button>
              
              {showMobileNotifications && (
                <div className="absolute right-0 mt-2 w-80 max-w-[90vw] bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-bold text-lg">Notifications</h3>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {/* Notification items would go here */}
                  </div>
                  <div className="p-3 text-center bg-gray-50">
                    <button className="text-primary font-medium">
                      View All Notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-dashed flex items-center justify-center">
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
            </div>
          </div>
        </div>
      </header>
        </>
    );
}