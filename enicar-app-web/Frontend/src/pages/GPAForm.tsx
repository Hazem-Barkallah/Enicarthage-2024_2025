import React, { useState, useMemo } from 'react';
import { Edit3, Save, X, ChevronDown } from 'lucide-react';

interface Subject {
    id: number;
    name: string;
    coefficient: number;
    cc: number;
    exam: number;
    note: number;
}

interface SemesterStats {
    semesterAverage: string;
    totalCredits: string;
}

export default function GPAForm() {
    const [selectedSemester, setSelectedSemester] = useState<number>(1);
    const [editingRow, setEditingRow] = useState<number | null>(null);

    const [subjects_s1, setSubjects_s1] = useState<Subject[]>([
        { id: 1, name: "Mathématiques de l'ingénieur", coefficient: 3.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 2, name: "Analyse numérique 1", coefficient: 2.0, cc: 0.0, exam: 0.0, note: 0.00 },
        { id: 3, name: "Algorithmique", coefficient: 3.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 4, name: "Programmation", coefficient: 4.0, cc: 0.0, exam: 0.0, note: 0.00 },
        { id: 5, name: "TIC", coefficient: 2.0, cc: 0.0, exam: 0.0, note: 0.00 },
        { id: 6, name: "Logique formelle", coefficient: 3.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 7, name: "Génie logiciel", coefficient: 3.0, cc: 0.0, exam: 0.0, note: 0.00 },
        { id: 8, name: "Circuits numériques et éléments", coefficient: 3.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 9, name: "Semi-conducteurs et électronique analogique", coefficient: 2.0, cc: 0.0, exam: 0.0, note: 0.00 },
        { id: 10, name: "Economie de l'entreprise", coefficient: 2.0, cc: 0.0, exam: 0.0, note: 0.00 },
        { id: 11, name: "Basic english", coefficient: 1.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 12, name: "Culture et communication 1", coefficient: 1.5, cc: 0.0, exam: 0.0, note: 0.00 }
    ]);

    const [subjects_s2, setSubjects_s2] = useState<Subject[]>([
        { id: 1, name: "Probabilités et Processus Stochastique", coefficient: 3.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 2, name: "Analyse numérique 2", coefficient: 2.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 3, name: "Structures de Données", coefficient: 2.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 4, name: "Programmation Orientée Objet", coefficient: 4.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 5, name: "Architecture des systèmes à Microprocesseur", coefficient: 2.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 6, name: "Fondement des réseaux", coefficient: 2.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 7, name: "Technologies Web", coefficient: 2.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 8, name: "Base de Données", coefficient: 2.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 9, name: "Analyse et conception des Systèmes d'Information", coefficient: 3.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 10, name: "Théorie des Organisations", coefficient: 2.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 11, name: "Professional English", coefficient: 1.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 12, name: "Culture et communication 2", coefficient: 1.5, cc: 0.0, exam: 0.0, note: 0.0 }
    ]);


    const [subjects_s3, setSubjects_s3] = useState<Subject[]>([
        { id: 1, name: "Système d'Exploitation", coefficient: 3.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 2, name: "Atelier de Systèmes d'Exploitation", coefficient: 2.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 3, name: "Algorithmique Avancée", coefficient: 3.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 4, name: "Programmation Java", coefficient: 3.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 5, name: "Technologies Web avancées", coefficient: 3.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 6, name: "Réseaux d'entreprises", coefficient: 3.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 7, name: "Recherche Opérationnelle et Optimisation", coefficient: 3.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 8, name: "Systèmes de Gestion des Bases des Données", coefficient: 3.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 9, name: "Comptabilité d’Entreprise", coefficient: 2.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 10, name: "Technical English", coefficient: 1.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 11, name: "Techniques de Recherche d’Emploi", coefficient: 1.5, cc: 0.0, exam: 0.0, note: 0.0 }
    ]);


    const [subjects_s4, setSubjects_s4] = useState<Subject[]>([
        { id: 1, name: "Théorie des Langages et Compilation", coefficient: 3.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 2, name: "Intelligence Artificielle", coefficient: 3.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 3, name: "Sécurité informatique", coefficient: 2.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 4, name: "Programmation et administration Système et Réseaux", coefficient: 3.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 5, name: "Développement mobile", coefficient: 2.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 6, name: "Plateformes de Développement", coefficient: 3.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 7, name: "Routage des Réseaux", coefficient: 2.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 8, name: "Systèmes Embarqués", coefficient: 3.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 9, name: "Analyse des Données", coefficient: 3.0, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 10, name: "Management des Projets", coefficient: 2.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 11, name: "Business English", coefficient: 1.5, cc: 0.0, exam: 0.0, note: 0.0 },
        { id: 12, name: "Communication en Entreprise", coefficient: 1.5, cc: 0.0, exam: 0.0, note: 0.0 }
    ]);

    const getCurrentSubjects = () => {
        switch (selectedSemester) {
            case 1: return subjects_s1;
            case 2: return subjects_s2;
            case 3: return subjects_s3;
            case 4: return subjects_s4;
            default: return subjects_s1;
        }
    };

    const getCurrentSetter = () => {
        switch (selectedSemester) {
            case 1: return setSubjects_s1;
            case 2: return setSubjects_s2;
            case 3: return setSubjects_s3;
            case 4: return setSubjects_s4;
            default: return setSubjects_s1;
        }
    };

    const currentSubjects = getCurrentSubjects();

    const { semesterAverage, totalCredits }: SemesterStats = useMemo(() => {
        let totalWeightedGrades: number = 0;
        let totalCoefficients: number = 0;

        currentSubjects.forEach((subject: Subject) => {
            if (subject.note >= 0) {
                totalWeightedGrades += subject.note * subject.coefficient;
                totalCoefficients += subject.coefficient;
            }
        });

        return {
            semesterAverage: totalCoefficients > 0 ? (totalWeightedGrades / totalCoefficients).toFixed(2) : '0.00',
            totalCredits: totalCoefficients.toFixed(1)
        };
    }, [currentSubjects]);

    const handleEdit = (id: number): void => {
        setEditingRow(id);
    };

    const handleSave = (id: number): void => {
        setEditingRow(null);
    };

    const handleCancel = (): void => {
        setEditingRow(null);
    };

    const updateSubject = (id: number, field: keyof Subject, value: string | number): void => {
        const setter = getCurrentSetter();
        setter((prev: Subject[]) => prev.map((subject: Subject) =>
            subject.id === id ? { ...subject, [field]: value } : subject
        ));
    };

    const getGradeColor = (grade: number): string => {
        if (grade >= 16) return 'text-green-600 bg-green-50';
        if (grade >= 14) return 'text-blue-600 bg-blue-50';
        if (grade >= 12) return 'text-yellow-600 bg-yellow-50';
        if (grade >= 10) return 'text-orange-600 bg-orange-50';
        return 'text-red-600 bg-red-50';
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
            <div className="mb-6">
                <div className="relative inline-block">
                    <label htmlFor="semester-select" className="block text-sm font-medium text-gray-700 mb-2">
                        Choisir le semestre:
                    </label>
                    <div className="relative">
                        <select
                            id="semester-select"
                            value={selectedSemester}
                            onChange={(e) => {
                                setSelectedSemester(Number(e.target.value));
                                setEditingRow(null);
                            }}
                            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:border-gray-400 transition-colors min-w-[200px] cursor-pointer"
                        >
                            <option value={1}>Semestre 1</option>
                            <option value={2}>Semestre 2</option>
                            <option value={3}>Semestre 3</option>
                            <option value={4}>Semestre 4</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-blue-400 px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-white">SEMESTRE {selectedSemester}</h1>
                            <p className="text-indigo-100 mt-1">Relevé de notes</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-white/30 rounded-lg px-4 py-2">
                                <div className="text-white text-sm">Moyenne</div>
                                <div className="text-2xl font-bold text-white">{semesterAverage}</div>
                            </div>
                            <div className="bg-white/30 bg-opacity-20 rounded-lg px-4 py-2">
                                <div className="text-white text-sm">Crédits</div>
                                <div className="text-2xl font-bold text-white">{totalCredits}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="text-left py-4 px-6 font-semibold text-gray-700">Matière</th>
                                <th className="text-center py-4 px-4 font-semibold text-gray-700">Coefficient</th>
                                <th className="text-center py-4 px-4 font-semibold text-gray-700">CC</th>
                                <th className="text-center py-4 px-4 font-semibold text-gray-700">Examen</th>
                                <th className="text-center py-4 px-4 font-semibold text-gray-700">Moyenne Matiere</th>
                                <th className="text-center py-4 px-4 font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {currentSubjects.map((subject: Subject) => (
                                <tr key={subject.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="font-medium text-gray-900">{subject.name}</div>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                            {subject.coefficient}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        {editingRow === subject.id ? (
                                            <input
                                                type="number"
                                                step="0.25"
                                                max="20"
                                                min="0"
                                                className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                value={subject.cc}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    updateSubject(subject.id, 'cc', e.target.value);
                                                    subject.id == 4 ? updateSubject(subject.id, 'note', parseFloat(e.target.value) * 0.5 + Number(subject.exam) * 0.5) :
                                                        updateSubject(subject.id, 'note', parseFloat(e.target.value) * 0.35 + Number(subject.exam) * 0.65)
                                                }}
                                            />
                                        ) : (
                                            <span className="text-gray-600">{subject.cc || '-'}</span>
                                        )}
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        {editingRow === subject.id ? (
                                            <input
                                                type="number"
                                                step="0.25"
                                                max="20"
                                                min="0"
                                                className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                value={subject.exam}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    updateSubject(subject.id, 'exam', e.target.value);
                                                    subject.id == 4 ? updateSubject(subject.id, 'note', parseFloat(e.target.value) * 0.5 + Number(subject.cc) * 0.5) :
                                                        updateSubject(subject.id, 'note', parseFloat(e.target.value) * 0.65 + Number(subject.cc) * 0.35)
                                                }}
                                            />
                                        ) : (
                                            <span className="text-gray-600">{subject.exam || '-'}</span>
                                        )}
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getGradeColor(subject.note)}`}>
                                            {subject.note.toFixed(2)}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        {editingRow === subject.id ? (
                                            <div className="flex items-center justify-center space-x-2">
                                                <button
                                                    onClick={() => handleSave(subject.id)}
                                                    className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors"
                                                >
                                                    <Save size={16} />
                                                </button>
                                                <button
                                                    onClick={handleCancel}
                                                    className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors"
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => handleEdit(subject.id)}
                                                className="p-1 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                                            >
                                                <Edit3 size={16} />
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{semesterAverage}</div>
                            <div className="text-sm text-gray-600">Moyenne de Semestre</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{totalCredits}</div>
                            <div className="text-sm text-gray-600">Crédits Validés</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{currentSubjects.length}</div>
                            <div className="text-sm text-gray-600">Matières Total</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};