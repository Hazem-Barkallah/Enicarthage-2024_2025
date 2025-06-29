import StudentsPage from "./components/StudentsPage";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";

export default function Home() {
    const location = useLocation();
    useEffect(() => {
        if (location.state?.toast === 'login-success')
            toast.success("Connexion réussie");

        if (location.state?.toast === 'signup-success')
            toast.success("Inscription réussie");

    }, [location.state]);
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch("/api/students");
                const data = await response.json();

                if (!response.ok) {
                    toast.error("Erreur lors de la récupération des étudiants");
                } else {
                    setStudents(data);
                }
            } catch (error) {
                toast.error("Erreur réseau lors de la récupération");
            }
        };

        fetchStudents();
    }, []);

    return (
        <>
            <ToastContainer></ToastContainer>
            <StudentsPage students={students} />
        </>

    );
}