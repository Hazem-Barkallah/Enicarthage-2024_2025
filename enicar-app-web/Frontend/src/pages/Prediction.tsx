import React, { useState, type JSX } from 'react';
import { Brain, TrendingUp, Award, Calculator, type LucideIcon } from 'lucide-react';

interface Grades {
    math: string;
    english: string;
    science: string;
    history: string;
    physics: string;
    chemistry: string;
    biology: string;
    literature: string;
}

interface PredictionResult {
    predictedGrade: number;
    confidence: number;
    category: 'Excellent' | 'Good' | 'Average' | 'Needs Improvement';
    insights: string[];
}

interface Subject {
    key: keyof Grades;
    label: string;
    icon: LucideIcon;
}

export default function GradePredictionApp(): JSX.Element {
    const [grades, setGrades] = useState<Grades>({
        math: '',
        english: '',
        science: '',
        history: '',
        physics: '',
        chemistry: '',
        biology: '',
        literature: ''
    });

    const [prediction, setPrediction] = useState<PredictionResult | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleInputChange = (subject: keyof Grades, value: string): void => {
        setGrades(prev => ({
            ...prev,
            [subject]: value
        }));
    };

    const handlePredict = async (): Promise<void> => {
        setIsLoading(true);

        // Simulate ML model prediction (replace with your actual ML model call)
        setTimeout(() => {
            const gradeValues: number[] = Object.values(grades)
                .filter((g: string) => g !== '')
                .map((g: string) => Number(g));

            const average: number = gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

            // Determine category based on average
            const getCategory = (avg: number): PredictionResult['category'] => {
                if (avg >= 90) return 'Excellent';
                if (avg >= 80) return 'Good';
                if (avg >= 70) return 'Average';
                return 'Needs Improvement';
            };

            // Mock prediction result
            const mockPrediction: PredictionResult = {
                predictedGrade: Math.round((average + Math.random() * 10 - 5) * 100) / 100,
                confidence: Math.round((85 + Math.random() * 10) * 100) / 100,
                category: getCategory(average),
                insights: [
                    `Based on ${gradeValues.length} subjects`,
                    `Average input: ${Math.round(average * 100) / 100}`,
                    `Trend: ${average > 75 ? 'Positive' : 'Stable'}`
                ]
            };

            setPrediction(mockPrediction);
            setIsLoading(false);
        }, 2000);
    };

    const subjects: Subject[] = [
        { key: 'math', label: 'Mathematics', icon: Calculator },
        { key: 'english', label: 'English', icon: Brain },
        { key: 'science', label: 'Science', icon: TrendingUp },
        { key: 'history', label: 'History', icon: Award },
        { key: 'physics', label: 'Physics', icon: Calculator },
        { key: 'chemistry', label: 'Chemistry', icon: Brain },
        { key: 'biology', label: 'Biology', icon: TrendingUp },
        { key: 'literature', label: 'Literature', icon: Award }
    ];

    const hasValidGrades: boolean = Object.values(grades).some((grade: string) => grade !== '' && !isNaN(Number(grade)));

    const getCategoryColor = (category: PredictionResult['category']): string => {
        switch (category) {
            case 'Excellent': return 'text-green-600';
            case 'Good': return 'text-blue-600';
            case 'Average': return 'text-yellow-600';
            case 'Needs Improvement': return 'text-red-600';
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
                            Grade Prediction Dashboard
                        </h1>
                    </div>
                    <p className="text-slate-600 text-lg">
                        Enter your subject grades to predict your overall performance
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white backdrop-blur-lg rounded-2xl border-2 border-blue-400 p-6 shadow-xl shadow-blue-100/50">
                            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                                <Calculator className="w-6 h-6 mr-2 text-blue-600" />
                                Subject Grades
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
                                            max="100"
                                            step="0.1"
                                            value={grades[key]}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(key, e.target.value)}
                                            placeholder="0-100"
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
                                        Analyzing...
                                    </>
                                ) : (
                                    <>
                                        <Brain className="w-5 h-5 mr-2" />
                                        Predict Grade
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white backdrop-blur-lg rounded-2xl border-2 border-blue-400 p-6 shadow-xl shadow-blue-100/50 h-full">
                            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                                <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                                Prediction Results
                            </h2>

                            {!prediction && !isLoading && (
                                <div className="text-center py-12">
                                    <Award className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                                    <p className="text-slate-500 text-lg">
                                        Enter grades and click predict to see results
                                    </p>
                                </div>
                            )}

                            {isLoading && (
                                <div className="text-center py-12">
                                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-400 border-t-transparent mx-auto mb-4"></div>
                                    <p className="text-slate-600 text-lg animate-pulse">
                                        Processing your grades...
                                    </p>
                                </div>
                            )}

                            {prediction && !isLoading && (
                                <div className="space-y-6 animate-fade-in">

                                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border-2 border-blue-400">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-blue-600 mb-2">
                                                {prediction.predictedGrade}%
                                            </div>
                                            <div className={`text-lg font-medium ${getCategoryColor(prediction.category)}`}>
                                                {prediction.category}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-400">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-slate-700">Confidence</span>
                                            <span className="text-green-600 font-semibold">
                                                {prediction.confidence}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-blue-200 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-1000"
                                                style={{ width: `${prediction.confidence}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-slate-700 font-medium">Insights</h3>
                                        {prediction.insights.map((insight: string, index: number) => (
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
                                        View Detailed Analysis
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