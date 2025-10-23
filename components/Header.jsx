import { Menu } from "lucide-react";

export default function Header({ toggleSidebar }) {
  return (
    <header className="flex items-center justify-between bg-white shadow-sm px-4 py-3 sticky top-0 z-10">
      <button className="md:hidden" onClick={toggleSidebar}>
        <Menu className="h-6 w-6 text-gray-600" />
      </button>
      <h1 className="text-xl font-semibold text-gray-800">True Form</h1>
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
          N
        </div>
      </div>
    </header>
  );
}
