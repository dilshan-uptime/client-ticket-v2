import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useMsal } from '@azure/msal-react';
import { useAppDispatch } from "@/hooks/store-hooks";
import { authActions } from "@/app/redux/authSlice";
import { AUTH_RESPONSE } from "@/constants/storage";
import storage from "@/services/storage/local-storage";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const { instance } = useMsal();
  const dispatch = useAppDispatch();

  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/ticket", label: "Ticket" },
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
        className="fixed top-4 left-4 z-50 p-2 bg-[#ee754e] rounded-md text-white hover:bg-[#d66540] focus:outline-none transition-colors duration-200"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen bg-[#ee754e] text-white p-6 flex flex-col space-y-6 shadow-lg transition-all duration-300 z-40 ${
          isOpen ? "w-56" : "w-16 overflow-hidden"
        }`}
      >
        <h1
          className={`text-2xl font-bold transition-opacity duration-300 mt-12 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          UT-Ticket
        </h1>

        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 py-2 px-3 rounded-lg ${
                  isActive 
                    ? "bg-white/20 text-white font-bold" 
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {isOpen ? item.label : item.label.charAt(0)}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto">
          <Button 
            onClick={handleLogout}
            className="w-full bg-white/20 text-white hover:bg-white/30 border border-white/30"
          >
            {isOpen ? "Logout" : "L"}
          </Button>
        </div>
      </aside>
    </>
  );
};
