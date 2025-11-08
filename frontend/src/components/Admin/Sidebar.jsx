import { useState } from "react";
import { Menu, X, Home, Users, Settings, BarChart } from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
return (
    <div className="flex">
      {/* Toggle Button - only visible on small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md cursor-pointer"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen bg-gray-900 text-white w-64 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:w-56`}
      >
        <div className="p-4 text-2xl font-semibold border-b border-gray-700">
          Admin Panel
        </div>

        <nav className="flex flex-col p-4 space-y-3">
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition"
          >
            <Home size={20} /> Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition"
          >
            <Users /> Chapters
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition"
          >
            <BarChart /> Courses
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition"
          >
            <Settings /> Feedbacks
          </a>
        </nav>
      </aside>
    </div>
);
};

export default Sidebar;
