import { NavLink } from "react-router-dom";
import { useMsal } from '@azure/msal-react';
import { useAppDispatch } from "@/hooks/store-hooks";
import { authActions } from "@/app/redux/authSlice";
import { AUTH_RESPONSE } from "@/constants/storage";
import storage from "@/services/storage/local-storage";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { TicketIcon } from "@/components/icons/TicketIcon";
import { LogoutIcon } from "@/components/icons/LogoutIcon";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const { instance } = useMsal();
  const dispatch = useAppDispatch();

  const navItems = [
    { path: "/home", label: "Home", icon: HomeIcon },
    { path: "/ticket", label: "Tickets", icon: TicketIcon },
  ];

  const handleLogout = async () => {
    storage.remove(AUTH_RESPONSE);
    dispatch(authActions.logoutUser());
    
    await instance.logoutRedirect({
      postLogoutRedirectUri: window.location.origin,
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-3 bg-[#ee754e] rounded-xl text-white hover:bg-[#d66540] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#ee754e] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <aside
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-[#ee754e] to-[#d66540] text-white flex flex-col shadow-2xl transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="p-6 pt-20">
          <div
            className={`flex items-center space-x-3 transition-all duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl font-bold">U</span>
            </div>
            {isOpen && (
              <div className="overflow-hidden">
                <h1 className="text-xl font-bold whitespace-nowrap">UT-Ticket</h1>
                <p className="text-xs text-white/70 whitespace-nowrap">Support System</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 group relative ${
                    isActive
                      ? "bg-white text-[#ee754e] shadow-lg font-semibold"
                      : "text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md"
                  }`
                }
              >
                {({ isActive }: { isActive: boolean }) => (
                  <>
                    <div className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                      <Icon 
                        size={22} 
                        className={`transition-colors duration-200 ${
                          isActive ? 'text-[#ee754e]' : 'text-white/90 group-hover:text-white'
                        }`}
                      />
                    </div>
                    <span
                      className={`font-medium whitespace-nowrap transition-all duration-300 ${
                        isOpen 
                          ? "opacity-100 translate-x-0" 
                          : "opacity-0 -translate-x-4 absolute left-16"
                      }`}
                    >
                      {item.label}
                    </span>
                    {!isOpen && (
                      <div className="absolute left-20 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-lg">
                        {item.label}
                        <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                      </div>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-3 pb-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-200 group border border-white/20 hover:border-white/30 hover:shadow-lg active:scale-95"
            aria-label="Sign out"
          >
            <div className="transition-transform duration-200 group-hover:scale-105">
              <LogoutIcon size={22} className="text-white/90 group-hover:text-white" />
            </div>
            <span
              className={`font-medium whitespace-nowrap transition-all duration-300 ${
                isOpen 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-4"
              }`}
            >
              Sign Out
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};
