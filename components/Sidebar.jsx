import { NavLink } from "react-router-dom";
import { LayoutDashboard, FileText, Settings } from "lucide-react";

export default function Sidebar({ isOpen, closeSidebar }) {
  const links = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={18} /> },
    { name: "Forms", path: "/forms", icon: <FileText size={18} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside
      className={\`fixed md:static inset-y-0 left-0 w-60 bg-white border-r shadow-sm transform \${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 ease-in-out z-20\`}
    >
      <div className="h-16 flex items-center justify-center font-bold text-xl border-b">
        TF Clone
      </div>
      <nav className="p-4 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={closeSidebar}
            className={({ isActive }) =>
              \`flex items-center gap-3 px-3 py-2 rounded-lg transition \${isActive ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-100"}\`
            }
          >
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
