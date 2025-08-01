import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import StudentsPage from "./components/StudentsPage";
import {getAllStudents} from "../../actions/Students";

export default function Home() {
    const location = useLocation();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        if (location.state?.toast === 'login-success')
            toast.success("Connexion réussie");

        if (location.state?.toast === 'signup-success')
            toast.success("Inscription réussie");
    }, [location.state]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await getAllStudents();
                setStudents(data);
            } catch (error) {
                toast.error("Erreur lors de la récupération");
            }
        };
        fetchStudents();
    }, []);

    return (
        <>
            <ToastContainer />
            <StudentsPage students={students} />
        </>
    );
}
