import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
export default function Layout() {
    return (
        <div className="flex sm:flex-row min-h-screen">
                <Sidebar />
                <Outlet /> 
        </div>
    );
}