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
    <main className=" mx-14 w-full flex flex-col my-4 drop-shadow-xl">
      <Header selectedRole={selectedRole} onRoleChange={handleRoleChange} />
      <div className="pb-5 font-bold text-gray-700 font-mono text-lg">
      <p>Nombre des étudiants: {filteredStudents.length}</p>
    </div>
      <StudentsList filteredStudents={filteredStudents} />
    </main>
  );
}
