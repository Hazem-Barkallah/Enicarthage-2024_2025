import React from "react";

interface HeaderProps {
  selectedRole: string;
  onRoleChange: (classe: string) => void;
}
const Header: React.FC<HeaderProps> = ({ selectedRole, onRoleChange }) => {
  return (
    <div className="flex items-center px-3 py-5">
      <label className="font-medium text-gray-700 pr-3">Classe:</label>
      <select
        value={selectedRole}
        onChange={(e) => onRoleChange(e.target.value)}
        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:border-gray-400 transition-colors min-w-[100px] cursor-pointer"
      >
        <option value="All">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
};

export default Header;
