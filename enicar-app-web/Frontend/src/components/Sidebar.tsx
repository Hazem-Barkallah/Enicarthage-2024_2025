import  { useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import { Brain, Sigma, Users, Settings, LogOut } from 'lucide-react';
import Logo from '../assets/Logo_Enicar.png';
export default function Sidebar() {
    const [activeItem, setActiveItem] = useState('students');
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/', { state: { toast: 'logout-success' } });
};

    const menuItems = [
        {
            id: 'students',
            label: 'Liste des étudiants',
            Icon: Users,
            path: '/home'
        },
        {
            id: 'GPA',
            label: 'Calcul de la Moyenne',
            Icon: Sigma,
            path: '/home/gpa',
        },
        {
            id: 'prediction',
            label: 'Prediction de la Réussite',
            Icon: Brain,
            path: '/home/prediction'
        },
        {
            id: '',
            label: 'Mon Profil',
            Icon: Settings,
            path: '/home/profile'
        }
    ];


    return (
        <div className="max-h-full max-w-80 m-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-500 rounded-4xl flex flex-col">
            <div className="flex flex-col items-center pt-5 pb-16">
                <img src={Logo} alt="Logo" className=" rounded-2xl w-3/4 mb-4 " />
                <h1 className="text-2xl  text-center text-gray-800 tracking-wider">Ecole Nationale d'Ingénieurs de Carthage</h1>
            </div>

            <nav className="flex-1 px-6">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = activeItem === item.id;
                        const IconComponent= item.Icon;
                        return (
                            <li key={item.id}>
                                <Link
                                    to={item.path}
                                    onClick={() => setActiveItem(item.id)}
                                    className={`w-full flex items-center px-4 py-4 rounded-lg text-left transition-all duration-200 ${isActive
                                            ? 'bg-white bg-opacity-30 shadow-lg text m-3'
                                            : 'text-gray-700 hover:text-white hover:px-5.5'
                                        }`}
                                >
                                    <IconComponent size={20} className={`mr-4`} />
                                    <span className="text-base font-medium">{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="p-6">
                <button className="w-full flex items-center px-4 py-4 text-gray-700 hover:border hover:border-white rounded-lg"
                        onClick={handleLogout}>
                    <LogOut size={20} className="mr-4 text-gray-600" />
                    <span className="text-base font-medium ">Se Déconnecter</span>
                </button>
            </div>
        </div>
    );
};