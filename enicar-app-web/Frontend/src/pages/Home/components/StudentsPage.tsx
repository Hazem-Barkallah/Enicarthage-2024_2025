import Header from "./Header";
import StudentsList from "./StudentsList";
import  { useState, useEffect } from "react";

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
interface StudentsPageClientProps {
  students: Student[];
}

export default function StudentsPage({ students }: StudentsPageClientProps) {
  const [allStudents, setAllStudents] = useState<Student[]>(students || []);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(students || []);
  const [selectedRole, setSelectedRole] = useState<string>("All");

  useEffect(() => {
    setAllStudents(students || []);
    setFilteredStudents(students || []);
  }, [students]);

  useEffect(() => {
    if (selectedRole === "All") {
      setFilteredStudents(allStudents);
    } else {
      setFilteredStudents(allStudents.filter((student) => student.group === selectedRole));
    }
  }, [selectedRole, allStudents]);

  const handleRoleChange = (group: string) => {
    setSelectedRole(group);
  };

  return (
    <div className="min-h-screen w-full rounded-4xl border border-blue-500 m-1 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4">
      <Header selectedRole={selectedRole} onRoleChange={handleRoleChange} />
      <div className="pb-5 font-bold text-gray-700 font-mono text-lg">
      <p>Nombre des étudiants: {filteredStudents.length}</p>
    </div>
      <StudentsList filteredStudents={filteredStudents} />
    </div>
  );
}
