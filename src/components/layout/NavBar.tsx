import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/ticket", label: "Ticket" },
    { path: "/about", label: "About" },
  ];

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-[#ee754e] rounded-md text-white hover:bg-orange-700 focus:outline-none"
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen bg-[#ee754e] text-white p-6 flex flex-col space-y-6 shadow-md transition-all duration-300 ${
          isOpen ? "w-56" : "w-16 overflow-hidden"
        }`}
      >
        <h1
          className={`text-2xl font-bold transition-opacity duration-300 ${
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
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white font-bold" : "text-white/70"
                }`
              }
            >
              {isOpen ? item.label : item.label.charAt(0)}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto">
          <Link to="/login">
            <Button className="w-full bg-red-500 text-white hover:bg-red-600">
              {isOpen ? "Logout" : "L"}
            </Button>
          </Link>
        </div>
      </aside>
    </>
  );
};
