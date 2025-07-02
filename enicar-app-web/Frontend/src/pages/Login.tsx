import React, { useState,useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, User, Mail, Lock, BookOpen } from 'lucide-react';

interface FormData {
    email: string;
    password: string;
    confirmPassword?: string;
    firstName?: string;
    lastName?: string;
    studentId?: string;
}

export default function Login() {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        studentId: ''
    });
    const location = useLocation();

    useEffect(() => {
        if (location.state?.toast === 'logout-success') {
            toast.success("Déconnexion réussie");
        }
    }, [location.state]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const Navigate=useNavigate();
    const handleSubmit = () => {
        if (isLogin) {
            if (!formData.email || !formData.password) {
                toast.error("Veuillez remplir tous les champs");
                return;
            }
            Navigate('/home', { state: { toast: 'login-success' } });
        } else {
            if (!formData.firstName || !formData.lastName || !formData.studentId || !formData.email || !formData.password || !formData.confirmPassword) {
                toast.error("Veuillez remplir tous les champs");
                return;
            }
            if (formData.password !== formData.confirmPassword) {
                toast.error("Les mots de passe ne correspondent pas");
                return;
            }
            toast.success("Inscription réussie");
            Navigate('/home', { state: { toast: 'signup-success' } });
        }
        setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            studentId: ''
        });
    };

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
        setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            studentId: ''
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-8">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-2xl shadow-xl mb-6">
                        <div className="flex items-center justify-center mb-4">
                            <div className="bg-white p-3 rounded-xl">
                                <img src="../public/image.png" alt="Logo" className='w-28 h-28'/>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">ENICARTHAGE</h1>
                        <p className="text-blue-100 text-sm">المدرسة الوطنية للمهندسين بقرطاج</p>
                        <p className="text-blue-100 text-xs mt-1">École Nationale d'Ingénieurs de Carthage</p>
                    </div>
                    <ToastContainer></ToastContainer>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {isLogin ? 'Connexion' : 'Inscription'}
                    </h2>
                    <p className="text-gray-600">
                        {isLogin
                            ? 'Accédez à votre espace étudiant'
                            : 'Créez votre compte étudiant'
                        }
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="space-y-6">
                        {!isLogin && (
                            <>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Prénom
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder="Prénom"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Nom
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder="Nom"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Numéro Étudiant
                                    </label>
                                    <div className="relative">
                                        <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            name="studentId"
                                            value={formData.studentId}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="Ex: ENI2023001"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Étudiant
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="prenom.nom@enicar.ucar.tn"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Mot de passe
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Confirmer le mot de passe
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        )}

                        {isLogin && (
                            <div className="text-right">
                                <button
                                    type="button"
                                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                                >
                                    Mot de passe oublié ?
                                </button>
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
                        >
                            {isLogin ? 'Se connecter' : "S'inscrire"}
                        </button>

                        {!isLogin && (
                            <p className="text-xs text-gray-600 text-center">
                                En créant un compte, vous acceptez les{' '}
                                <button className="text-blue-600 hover:underline">
                                    conditions d'utilisation
                                </button>{' '}
                                et la{' '}
                                <button className="text-blue-600 hover:underline">
                                    politique de confidentialité
                                </button>
                            </p>
                        )}
                    </div>
                </div>

                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        {isLogin ? "Vous n'avez pas de compte ?" : 'Vous avez déjà un compte ?'}
                    </p>
                    <button
                        onClick={toggleAuthMode}
                        className="mt-2 text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
                    >
                        {isLogin ? "Créer un compte" : "Se connecter"}
                    </button>
                </div>

                <div className="text-center mt-8 text-sm text-gray-500">
                    <p>© 2024-2025 Hazem's project</p>
                </div>
            </div>
        </div>
    );
};