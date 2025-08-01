import React, { useState, type JSX } from 'react';
import { Brain, TrendingUp, Award, Calculator, ComputerIcon,Languages,Pencil,HandCoins,Radical,Pi,Cpu,CircuitBoard,Router,BrainCircuit, type LucideIcon } from 'lucide-react';
import { getPredictions } from '../actions/Prediction';

interface Grades {
    moy_math_ing: string
    moy_analyse_s1: string
    moy_algo: string
    moy_prog: string
    moy_TIC: string
    moy_logique: string
    moy_GL: string
    moy_circuit: string
    moy_semi: string
    moy_eco_s1: string
    moy_ang_s1: string
    moy_fr_s1: string

}

interface PredictionResult {
    success: string;
    probability: number;
}

interface PredictionDisplay {
    prediction: PredictionResult;
    category: string;
    insights: string[];
}
interface Subject {
    key: keyof Grades;
    label: string;
    icon: LucideIcon;
}

export default function GradePredictionApp(): JSX.Element {
    const [grades, setGrades] = useState<Grades>({
        moy_math_ing: '',
        moy_analyse_s1: '',
        moy_algo: '',
        moy_prog: '',
        moy_TIC: '',
        moy_logique: '',
        moy_GL: '',
        moy_circuit: '',
        moy_semi: '',
        moy_ang_s1: '',
        moy_fr_s1: '',
        moy_eco_s1: ''
    });

    const [prediction, setPrediction] = useState<PredictionResult | null>(null);
    const [predictionDisplay, setPredictionDisplay] = useState<PredictionDisplay | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleInputChange = (subject: keyof Grades, value: string): void => {
        setGrades(prev => ({
            ...prev,
            [subject]: value
        }));
    };

    const handlePredict = async (): Promise<void> => {
        setIsLoading(true);
        try {
            const gradeValues: Record<string, number> = {};
            for (const key in grades) {
                const value = grades[key as keyof Grades];
                (value == '') ? gradeValues[key] = 0 : gradeValues[key] = Number(value);
            }

            const predictionResponse = await getPredictions(gradeValues);
            console.log("API response:", predictionResponse);
            setPrediction(predictionResponse.prediction);
            console.log("Prediction result:", prediction);

            const getCategory = (avg: number): string => {
                if (avg >= 90) return 'Excellent';
                if (avg >= 80) return 'Bon';
                if (avg >= 70) return 'Moyen';
                return 'Besoin d\'Amélioration';
            };

            const displayData: PredictionDisplay = {
                prediction: {
                    success: predictionResponse.prediction.success,
                    probability: predictionResponse.prediction.probability * 100
                },
                category: getCategory(predictionResponse.prediction.probability * 100),
                insights: [
                    `Basé sur ${Object.keys(gradeValues).length} matières`,
                    `Moyenne des entrées: ${Math.round(predictionResponse.prediction.probability * 100 * 100) / 100}`,
                    `Tendance: ${predictionResponse.prediction.probability * 100 > 75 ? 'Positive' : 'Stable'}`
                ]
            };
            
            setPredictionDisplay(displayData);
        } catch (error) {
            console.error("Prediction error:", error);
        }
        finally{
            setTimeout(() => setIsLoading(false), 3000);
        }
    };


    const subjects: Subject[] = [
        { key: 'moy_math_ing', label: 'Maths Pour Ingénieur', icon: Radical },
        { key: 'moy_analyse_s1', label: 'Analyse Numérique', icon: Pi },
        { key: 'moy_algo', label: 'Algorithmique', icon: BrainCircuit },
        { key: 'moy_prog', label: 'Programmation', icon: ComputerIcon },
        { key: 'moy_TIC', label: 'Technologies de l\'Information et de la Communication', icon: Router },
        { key: 'moy_circuit', label: 'Circuits Électroniques', icon: CircuitBoard },
        { key: 'moy_logique', label: 'Logique Formelle', icon: Brain },
        { key: 'moy_semi', label: 'Semi-Conducteurs', icon: Cpu },
        { key: 'moy_GL', label: 'Génie Logiciel', icon: Pencil },
        { key: 'moy_ang_s1', label: 'Anglais', icon: Languages },
        { key: 'moy_fr_s1', label: 'Français', icon: Languages },
        { key: 'moy_eco_s1', label: 'Économie', icon: HandCoins }
    ];

    const hasValidGrades: boolean = Object.values(grades).some((grade: string) => grade !== '' && !isNaN(Number(grade)));

    const getCategoryColor = (category: string): string => {
        switch (category) {
            case 'Excellent': return 'text-green-600';
            case 'Bon': return 'text-blue-600';
            case 'Moyen': return 'text-yellow-600';
            case 'Besoin d\'Amélioration': return 'text-red-600';
            default: return 'text-blue-600';
        }
    };

    return (
        <div className="min-h-screen rounded-4xl border border-blue-500 m-1 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 animate-fade-in">
                    <div className="flex items-center justify-center mb-4">
                        <Brain className="w-12 h-12 text-blue-600 mr-3" />
                        <h1 className="text-4xl md:text-5xl font-light text-slate-800">
                            Dashboard de Prédiction de réussite
                        </h1>
                    </div>
                    <p className="text-slate-600 text-lg">
                        Entrer vos moyennes de matières du 1er semestre pour prédire votre performance globale
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white backdrop-blur-lg rounded-2xl border-2 border-blue-400 p-6 shadow-xl shadow-blue-100/50">
                            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                                <Calculator className="w-6 h-6 mr-2 text-blue-600" />
                                Moyennes de Matières
                            </h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                {subjects.map(({ key, label, icon: Icon }: Subject) => (
                                    <div key={key} className="group">
                                        <label className=" text-slate-700 text-sm font-medium mb-2 flex items-center">
                                            <Icon className="w-4 h-4 mr-2 text-blue-600" />
                                            {label}
                                        </label>
                                        <input
                                            type="number"
                                            min="0"
                                            max="20"
                                            step="0.25"
                                            value={grades[key]}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(key, e.target.value)}
                                            placeholder="0-20"
                                            className="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-xl text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300/30 transition-all duration-300 group-hover:border-blue-300"
                                        />
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={handlePredict}
                                disabled={!hasValidGrades || isLoading}
                                className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300 flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                                        Analyse...
                                    </>
                                ) : (
                                    <>
                                        <Brain className="w-5 h-5 mr-2" />
                                        Prédire la réussite
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white backdrop-blur-lg rounded-2xl border-2 border-blue-400 p-6 shadow-xl shadow-blue-100/50 h-full">
                            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                                <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                                Résultats de Prédiction
                            </h2>

                            {!prediction && !isLoading && (
                                <div className="text-center py-12">
                                    <Award className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                                    <p className="text-slate-500 text-lg">
                                        Entrer vos notes et cliquer sur prédire pour voir les résultats
                                    </p>
                                </div>
                            )}

                            {isLoading && (
                                <div className="text-center py-12">
                                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-400 border-t-transparent mx-auto mb-4"></div>
                                    <p className="text-slate-600 text-lg animate-pulse">
                                        Traitement de vos notes...
                                    </p>
                                </div>
                            )}

                            {prediction && !isLoading && (
                                <div className="space-y-6 animate-fade-in">

                                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border-2 border-blue-400">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-blue-600 mb-2">
                                                {prediction.success === 'Success' ? 'Succès' : 'Échec'}
                                            </div>
                                            <div className={`text-lg font-medium ${getCategoryColor(predictionDisplay!.category)}`}>
                                                {predictionDisplay!.category}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-400">
                                        <div className="flex justify-between items-center mb-2">
                                            {/* <span className="text-slate-700">Confiance</span> */}
                                            <span className="text-slate-700">Probabilité</span>
                                            <span className="text-green-600 font-semibold">
                                                {Math.round(predictionDisplay!.prediction.probability * 100) / 100}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-blue-200 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-1000"
                                                style={{ width: `${predictionDisplay!.prediction.probability}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-slate-700 font-medium">Aperçus</h3>
                                        {predictionDisplay!.insights.map((insight: string, index: number) => (
                                            <div key={index} className="flex items-center text-slate-600 text-sm">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                {insight}
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        className="w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-xl border border-blue-400 hover:bg-blue-200  transition-all duration-300"
                                        onClick={() => console.log('Detailed analysis clicked', prediction)}
                                    >
                                        Voir l'analyse détaillée
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


            </div>

            <style>{`
        @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
        }
        
        .animate-fade-in {
        animation: fade-in 0.6s ease-out;
        }
    `}</style>
        </div>
    );
}