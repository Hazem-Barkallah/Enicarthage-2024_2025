import React from "react";

interface Student {
  _id: number;
  firstname: string;
  lastname: string;
  group: string;
  gpa: number;
}

interface StudentsListProps {
  filteredStudents: Student[];
}

const StudentsList: React.FC<StudentsListProps> = ({filteredStudents}) => {
  if (!filteredStudents || filteredStudents.length === 0) {
    return (
      <p className="text-center text-lg text-gray-600 font-semibold">
        Pas d'Etudiants trouvés
      </p>
    );
  }
  return (
    <div className="self-center w-full border overflow-x-auto rounded-lg">
      <table className="bg-light rounded-lg w-full">
        <thead>
          <tr className="bg-gradient-to-r from-blue-500 to-blue-600">
            <td className="px-6 py-7 font-semibold text-center text-2xl text-white">
              Etudiant
            </td>
            <td className="px-6 py-7 font-semibold text-center text-2xl text-white">Moyenne générale</td>
            <td className="px-6 py-7 font-semibold text-center text-2xl text-white">Classe</td>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student._id}>
              <td className="py-7 text-blue-800 text-center font-semibold border-t ">
                {student.firstname} {student.lastname}
              </td>
              <td className="py-7 text-blue-800 text-center font-semibold border-t">
                {student.gpa}
              </td>
              <td className="py-7 text-blue-800  text-center font-semibold border-t ">
                {student.group}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
