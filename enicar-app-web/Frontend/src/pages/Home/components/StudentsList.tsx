import React, { useState, useEffect } from "react";

export interface Student {
  _id: string;
  studentNum: string;
  firstname: string;
  lastname: string;
  gpa: number;
  level: string;
  group: string;
  passed: string;
  grades: Map<string, number>;
}

interface StudentsListProps {
  filteredStudents: Student[];
}

const StudentsList: React.FC<StudentsListProps> = ({ filteredStudents }) => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;


  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;
  const endIndex = startIndex + studentsPerPage;
  const currentStudents = filteredStudents.slice(startIndex, endIndex);

  const openModal = (student: Student) => {
    window.scrollTo({
      top: 0,
    });

    setTimeout(() => {
      setSelectedStudent(student);
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    }, 0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
    document.body.style.overflow = 'unset';
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!filteredStudents || filteredStudents.length === 0) {
    return (
      <p className="text-center text-lg text-gray-600 font-semibold">
        Pas d'Etudiants trouvés
      </p>
    );
  }

  return (
    <>
      <div className="self-center w-full border overflow-x-auto rounded-lg">
        <table className="bg-light rounded-lg w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-blue-600">
              <td className="px-6 py-7 font-semibold text-center text-2xl text-white">
                Etudiant
              </td>
              <td className="px-6 py-7 font-semibold text-center text-2xl text-white">
                Moyenne générale
              </td>
              <td className="px-6 py-7 font-semibold text-center text-2xl text-white">
                Classe
              </td>
              <td className="px-6 py-7 font-semibold text-center text-2xl text-white"></td>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student) => (
              <tr key={student._id} className="hover:bg-gray-300">
                <td className="py-7 text-blue-800 text-center font-semibold border-t ">
                  {student.firstname} {student.lastname}
                </td>
                <td className="py-7 text-blue-800 text-center font-semibold border-t">
                  {student.gpa}
                </td>
                <td className="py-7 text-blue-800 text-center font-semibold border-t ">
                  {student.group}
                </td>
                <td className="py-7 text-blue-800 text-center font-semibold border-t ">
                  <div className="flex justify-center">
                    <button
                      onClick={() => openModal(student)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Détails
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded ${currentPage === 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
          >
            Précédent
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`px-3 py-2 rounded ${currentPage === page
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded ${currentPage === totalPages
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
          >
            Suivant
          </button>
        </div>
      )}

      <div className="text-center mt-4 text-gray-600">
        Page {currentPage} sur {totalPages}
      </div>
      {isModalOpen && selectedStudent && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 mt-5 max-w-md w-full mx-4 shadow-2xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-800">
                Détails de l'étudiant
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold bg-gray-300 rounded-2xl w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom
                </label>
                <p className="text-lg text-gray-900">{selectedStudent.firstname}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <p className="text-lg text-gray-900">{selectedStudent.lastname}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Niveau
                </label>
                <p className="text-lg text-gray-900">{selectedStudent.level}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Classe
                </label>
                <p className="text-lg text-gray-900">{selectedStudent.group}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Moyenne générale
                </label>
                <p className="text-lg text-gray-900 font-semibold">
                  {selectedStudent.gpa}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Statut
                </label>
                <p className="text-lg text-gray-900">
                  {selectedStudent.passed=="A" ? 'Admis(e)' : 'Controle'}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes
                </label>
                <ul>
                  {Object.entries(selectedStudent.grades).map(([subject, grade]) => (
                    <li key={subject}>
                      {subject}: {grade}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Fermer
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentsList;