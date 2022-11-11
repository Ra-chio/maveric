import { Navigate, Route, Routes } from "react-router-dom";
import EmpDetails from "./components/EmpDetails";
import EmpDirectory from "./components/EmpDirectory";
import Login from "./components/Login";
import "./styles.css";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/employee-directory" element={<EmpDirectory />} />
            <Route path="/employee-details" element={<EmpDetails />} />
        </Routes>
    );
}
